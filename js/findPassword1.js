var app = new Vue({
    el: "#body",    
    data: {
        content: '发送验证码',  
         totalTime: 60 ,     
         canClick: true ,
         isShow:true,
    },

    methods:{
        getCode:function(){
            if (!this.canClick) return  
            this.canClick = false
            this.content = this.totalTime + 's后重新发送'
            let clock = window.setInterval(() => {
             this.totalTime--
             this.content = this.totalTime + 's后重新发送'
             if (this.totalTime < 0) {
              window.clearInterval(clock)
              this.content = '重新发送验证码'
              this.totalTime = 60
              this.canClick = true  
             }
            },1000)
        },
        nextPage(){
            console.log("1111")
            window.location.href="../html/findPassword2.html"
        },
        nextPage1(){
            this.isShow=!this.isShow;
        },
        goLogin(){
            window.location.href="../html/login.html"
        }
    }
})