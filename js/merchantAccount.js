var app = new Vue({
    el: "#body",
    data: {

        isShowLIst: true,
        accountList: [{
            name: '个人商户',
            id: 1,
            type: "p"
        }, {
            name: '企业商户',
            id: 2,
            type: "e"
        }, {
            name: '政府商户',
            id: 3,
            type: "g"
        }],
        commercial: '个人商户',
        commercialID: "1",
        commercialType: "p",
        isShowModal: false,
        name: "",
        tel: "",
        email: "",
        textarea: "",
        
        enterprise: {
           
            enterpriseName: "", //企业名称
            industry: "", //行业
            site: "", //地址
            enterprisePhone: "", //企业电话
            capital: "", //注册资本
           
        },
        government: {
           
            governmentName: "", //政府名称
            site: "", //地址
            
        }
    },

    methods: {

        selectAccount() {
            this.isShowLIst = !this.isShowLIst
        },
        selectAccountList(item) {
            this.isShowLIst = !this.isShowLIst;
            this.commercial = item.name;
            this.commercialID = item.id;
            this.commercialType = item.type;
            this.name= "";
            this.tel="";
            this.email= "";
            this.textarea= "";
        },
        phoneCheck(phone) { //验证手机号
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(phone)) {
                return false;
            } else {
                return true;
            }
        },
        emailCheck(email) { //验证邮箱

            var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (!reg.test(email)) {
                return false;
            } else {
                return true;
            }
        },
        submitData() {

            let _this = this;
            if (window.XMLHttpRequest) {
                _this.XHR = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                _this.XHR = new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                _this.XHR = null;
                alert("您的浏览器版本太低");
            }

            if (_this.XHR) {
                let postData = {};
                if(!_this.name){
                    alert("名字不能为空")
                    return
                }
                if(!_this.phoneCheck(_this.tel)){
                    alert("请输入正确得手机号")
                    return
                }
                if(!_this.emailCheck(_this.email)){
                    alert("请输入正确得email")
                    return
                }
                if(_this.textarea) postData.remarks=_this.textarea;


                postData = {
                    "name": _this.name,
                    "telPhone": _this.tel,
                    "email": _this.email,
                    "type": _this.commercialType
                }

                if (this.commercialType == "e") { //企业商户
                    console.log("222")


                    if(_this.enterprise.enterpriseName) postData.enterpriseName=_this.enterprise.enterpriseName;
                    if(_this.enterprise.industry) postData.industry=_this.enterprise.industry;
                    if(_this.enterprise.site) postData.address=_this.enterprise.site;
                    if(_this.enterprise.enterprisePhone) {
                        if(!_this.phoneCheck(_this.enterprise.enterprisePhone)){
                            alert("请输入正确得手机号")
                            return
                        }
                        postData.enterprisePhone=_this.enterprise.enterprisePhone;
                    }
                    if(_this.enterprise.capital) {
                        if(isNaN(_this.enterprise.capital)){
                            alert("请输入数字")
                            return
                        }
                        postData.registeredCapital=_this.enterprise.capital;
                    }

                }
                if (this.commercialType == "g") { //政府商户
                  console.log("3333")
                    if(_this.government.governmentName) postData.governmentName=_this.government.governmentName;
                    if(_this.government.site) postData.address=_this.government.site;
                }

                _this.XHR.open("POST", "http://59.110.219.138:8769/account/operativeApi/insertOperative");
                _this.XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); //TODO 可以定义请求头带给后端
                _this.XHR.send(JSON.stringify(postData));
                _this.XHR.onreadystatechange = function () {
                    if (_this.XHR.readyState == 4 && _this.XHR.status == 200) {
                        console.log("提交成功")
                        _this.isShowModal = !_this.isShowModal
                    }
                }

            }




        },
        backIndex() {
            window.location.href = "../index.html"
        }
    },

})