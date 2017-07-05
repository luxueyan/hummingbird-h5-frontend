<template lang="pug">
  .message
    h3 {{message.title}}
    small {{message.date | moment('YYYY-MM-DD HH:mm:ss')}}
    .content {{message.content}}
</template>

<script>
export default {
  data() {
    return {
      message: {
        title: '自动还款提醒',
        id: 1,
        unRead: true,
        date: new Date(),
        content: '这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容，这里是消息具体内容'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables.scss';
.message {
  padding: 10px 10px 0;
  h3 {
    font-size: 16px;
    margin: 5px 0;
    font-weight: normal;
  }
  small {
    display: block;
    font-size: 13px;
    color: $gray-color;
    margin-bottom: 10px;
  }
  .content {
    line-height: 1.8em;
    padding-top: 10px;
    color: $gray-color;
    font-size: 14px;
    &:last-child {
      background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: top;
    }
  }
}
</style>
