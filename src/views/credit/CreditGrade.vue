<template lang="pug">
  section.credit-grade
    ul.credit-level-line
      li(v-for="p in privileges", :class="getItemClass(p.level)")
        .level-item
          h3
            .text-left Lv{{p.level}}等级
            .text-right 信用积分：{{p.minPoint}}~{{p.maxPoint}}
          article
            p.amount
              em {{p.limitAmount | fbRound}}
              | 元
            p.desc
              | {{p.estimatePercentage | fbPercent(0, 1)}}用户在此，享受
              em {{p.description}}
</template>

<script>
import { systemPrivileges } from '@/common/resources.js'

export default {
  async beforeRouteEnter(to, from, next) {
    const data = await systemPrivileges.get().then(res => res.json())
    next(vm => {
      if (data.data) {
        vm.privileges = data.data.privileges || []
      }
    })
  },

  methods: {
    getItemClass(level) {
      return this.currentLevel < level ? 'future-level' : ''
    }
  },

  data() {
    return {
      currentLevel: this.$store.getters.user.privilegeInfo.currentLevel || 0,
      privileges: []
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/_variables.scss";
.credit-grade {
  padding: 15px 20px;
  font-size: $font-size-m;
}

.credit-level-line {
  .future-level {
    .level-item {
      h3 {
        background: $mid-gray-color;
        &:before {
          border-color: transparent $mid-gray-color transparent transparent;
        }
      }
      .amount {
        color: $mid-gray-color;
      }
    }
  }
  .level-item {
    box-shadow: 0 15px 24px rgba(0, 0, 0, .1);
    h3 {
      line-height: 40px;
      display: flex;
      font-weight: normal;
      background: $primary-color;
      color: white;
      padding: 0 15px;
      position: relative;
      &>div {
        flex: 1;
      }
      .text-right {
        font-size: $font-size-xxs;
      }
      &:before {
        content: '';
        position: absolute;
        left: -18px;
        height: 0;
        width: 0;
        border-width: 10px 10px;
        border-color: transparent $primary-color transparent transparent;
        border-style: solid;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    article {
      overflow: hidden;
      background: white;
      padding: 0 15px 5px; // line-height: 1.8em;
      .amount {
        margin: 12px 0;
        color: $primary-color;
        em {
          font-family: "franklin";
          font-size: 35px;
          font-style: normal;
        }
      }
      .desc {
        margin: 12px 0;
        font-size: $font-size-xxs;
        color: $minor-font-color;
        em {
          color: $el-red;
          font-style: normal;
        }
      }
    }
  }
  li {
    position: relative;
    padding: 15px 0 15px 24px;
    &:not(:last-child):before {
      content: '';
      position: absolute;
      left: 0;
      top: 35px;
      height: 100%;
      width: 3px;
      background-color: #d6e7f8;
    }
    &:after {
      content: '';
      position: absolute;
      left: -2px;
      top: 32px;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 0 0 5px $primary-color;
    }
  }
}
</style>
