let app = new Vue({
  el: '#body',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    phoneCheck(phone) {
      //验证手机号
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(phone)) {
        return false
      } else {
        return true
      }
    },
    submitClick() {
      let _this = this
      if (window.XMLHttpRequest) {
        _this.XHR = new XMLHttpRequest()
      } else if (window.ActiveXObject) {
        _this.XHR = new ActiveXObject('Microsoft.XMLHTTP')
      } else {
        _this.XHR = null
        alert('您的浏览器版本太低')
      }

      if (_this.XHR) {
        if (!_this.form.username) {
          alert('商家ID不能为空')
          return
        }
        if (!_this.phoneCheck(_this.form.username)) {
          alert('请输入正确得商家ID')
          return
        }
        if (!_this.form.password) {
          alert('请输入密码')
          return
        }

        _this.XHR.open(
          'POST',
          'http://59.110.219.138:8769/account/merchantLoginApi/login?userName=' +
            _this.form.username +
            '&password=' +
            _this.form.password
        )
        _this.XHR.setRequestHeader(
          'Content-Type',
          'application/json;charset=UTF-8'
        ) //TODO 可以定义请求头带给后端
        _this.XHR.onreadystatechange = function() {
          if (_this.XHR.readyState == 4 && _this.XHR.status == 200) {
            let res = JSON.parse(_this.XHR.responseText)
            console.log('提交成功')
            console.log(res)
            alert(res.message)
          }
        }
        _this.XHR.send(null)
      }

      return false
    }
  }
})
