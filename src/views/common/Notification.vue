<template lang="pug">
section.notification
  h2.text-center 本微信公众号搬家啦！
  article
    p 为了给您提供更优质的服务，蜂鸟团队近期对旗下的微信平台进行了整合升级。
    p 即日起，蜂鸟速贷公众号将 <em>停止更新</em>，本号的内容与服务将整体搬迁至微信公众号<em>【极速蜂鸟】</em>。
    div.text-center.qrcode-con
      p 欢迎大家关注<em>【极速蜂鸟】</em>
      p 长按二维码并关注↓
      img.qrcode(src="~assets/images/new_public_qrcode.jpeg")
</template>


<style lang="scss" scoped>
.notification {
  margin-top: 30px;
  padding: 0 10px;
}

h2 {
  margin: 15px 0;
}

.qrcode-con {
  margin-top: 20px;
}

em {
  font-weight: bold;
  margin: 0 3px;
  font-style: normal;
}

p {
  line-height: 1.8em;
}

.qrcode {
  max-width: 300px;
  margin-top: 10px;
}

.text-center {
  text-align: center;
}
</style>
