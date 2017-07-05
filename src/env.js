export default {
  getManifestServer() {
    if (process.env.NODE_ENV === 'app-development') {
      return 'http://localhost:8000/'
    } else {
      return 'http://fn.91zhengxin.com:9111/'
    }
  }
}
