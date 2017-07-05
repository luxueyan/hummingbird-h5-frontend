<template lang="pug">
  .messages(v-infinite-scroll="loadMore", infinite-scroll-disabled="loadingMoreStatus", infinite-scroll-distance="10")
    .cells
      mt-cell(v-for="message in messages", is-link, :to="{name: 'messageDetail', params: {id: message.id}}")
        .content(slot="title")
          .title
            h3
              i.icon-circle(slot="icon", :class="{'unread': message.unRead}")
              | {{message.title}}
            .date {{message.date | moment('YYYY-MM-DD')}}
          p {{message.content}}
    .loading-more-status(v-show="loadingMoreStatus")
      mt-spinner(type="snake")
      | 努力加载中...
</template>

<script>
import {
  headerRightButton
} from '../../common/crossers.js'
// import {
//   Messages
// } from '../../common/resources.js'

export default {
  // beforeRouteEnter(to, from, next) {
  //   Messages.get().then(res => res.json())
  //     .then(data => {
  //       next(vm => {
  //         if (data.messages) {
  //           vm.messages = data.messages
  //         }
  //       })
  //     })
  // },
  methods: {
    markAllMessageAsRead() {
      console.log('mark all messages read')
    },
    loadMore() {
      this.loadingMoreStatus = true
      setTimeout(() => {
        this.loadingMoreStatus = false
        this.messages.push({
          title: '自动还款提醒',
          id: 1,
          unRead: true,
          date: new Date(),
          content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
        })
      }, 1500)
    }
  },

  mounted() {
    headerRightButton.$on('messages-mark-read', () => {
      const _self = this
      this.$messagebox({
        title: '提示',
        message: '确定将全部消息标记为已读吗？',
        confirmButtonText: '确定',
        showCancelButton: true,
        cancelButtonText: '取消',
        callback(action) {
          if (action === 'confirm') {
            _self.markAllMessageAsRead()
          }
        }
      })
    })
  },

  data() {
    return {
      loadingMoreStatus: false,
      messages: [{
        title: '自动还款提醒',
        id: 1,
        unRead: true,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }, {
        title: '自动还款提醒',
        id: 1,
        unRead: false,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables.scss';
.messages {
  margin-top: 10px;
  .mint-cell-title {
    display: flex;
    align-items: center;
  }
  .title {
    display: flex;
    align-items: center;
  }
  .date {
    text-align: right;
    flex: 1;
  }
  .content {
    line-height: 1.8em;
    h3 {
      flex: 1;
      font-size: 16px;
      font-weight: normal;
    }
    font-size: 14px;
    overflow: hidden;
    padding: 10px 0;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 11px;
      color: $gray-color;
    }
  }
  .date {
    font-size: 12px;
  }
  .icon-circle {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: $mid-gray-color;
    border-radius: 50%;
    vertical-align: 2px;
    margin-right: 5px;
    &.unread {
      background-color: $primary-color;
    }
  }
  .loading-more-status {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-right: 5px;
    }
  }
}
</style>
