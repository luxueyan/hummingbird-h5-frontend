import Vue from 'vue'
import { each } from 'lodash'

function removeOldMsgBox() {
  each(document.querySelectorAll('.custom-msgbox'), v => {
    v && v.remove()
  })
}

export default function(data = {}, callback) {
  removeOldMsgBox()
  if (!callback) callback = data.callback || null
  /* eslint-disable no-new */
  new Vue({
    el: document.createElement('div'),
    template: `<fb-msgbox ref="msgBox"  :msgbox-class="classes" :showCancelButton="false">
                <div>
                  <h3>{{title}}</h3>
                  <p>{{message}}</p>
                </div>
                <div slot="confirmButtonContent">{{confirmButtonText}}</div>
              </fb-msgbox>`,

    data() {
      return Object.assign({
        classes: ['custom-msgbox'],
        title: '提示',
        message: '',
        confirmButtonText: '我知道了'
      }, data)
    },
    mounted() {
      document.body.appendChild(this.$el)
      this.$refs.msgBox.open(action => {
        if (callback) callback(action)
      })
    }
  })
}
