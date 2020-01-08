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
        personage: {
            name: "",
            tel: "",
            email: "",
            textarea: "",
        },
        enterprise: {
            name: "",
            tel: "",
            email: "",
            textarea: "",
            enterpriseName: "", //企业名称
            industry: "", //行业
            site: "", //地址
            enterprisePhone: "", //企业电话
            capital: "", //注册资本
            textarea: "", //备注
        },
        government: {
            name: "",
            tel: "",
            email: "",
            textarea: "",
            governmentName: "", //政府名称
            site: "", //地址
            textarea: "", //备注
        }
    },

    methods: {

        selectAccount() {
            this.isShowLIst = !this.isShowLIst
        },
        selectAccountList(item) {
            this.isShowLIst = !this.isShowLIst;
            this.commercial = item.name;
            console.log(item.id);
            this.commercialID = item.id;
            this.commercialType = item.type;
        },
        phoneCheck() { //验证手机号
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test($poneInput.val())) {
                return false;
            } else {
                return true;
            }
        },
        emailCheck() { //验证邮箱
            var email = this.value;
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
                if (this.commercialType == "p") { //个人商户
                    postData = {
                        "name": _this.personage.name,
                        "tel": _this.personage.tel,
                        "email": _this.personage.email,
                        "textarea": _this.personage.textarea,
                        "type": _this.commercialType
                    }
                }
                if (this.commercialType == "e") { //企业商户
                    postData = {
                        "name": _this.personage.name,
                        "tel": _this.personage.tel,
                        "email": _this.personage.email,
                        "textarea": _this.personage.textarea,
                        "type": _this.commercialType
                    }
                }
                if (this.commercialType == "g") { //政府商户
                    postData = {
                        "name": _this.personage.name,
                        "tel": _this.personage.tel,
                        "email": _this.personage.email,
                        "textarea": _this.personage.textarea,
                        "type": _this.commercialType
                    }
                }

                _this.XHR.open("POST", "http://122.115.50.205:8999/account/operativeApi/insertOperative");
                _this.XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); //TODO 可以定义请求头带给后端
                _this.XHR.send(postData);
                _this.XHR.onreadystatechange = function () {
                    if (_this.XHR.readyState == 4 && _this.XHR.status == 200) {
                        console.log("提交成功")
                        this.isShowModal = !this.isShowModal;
                    } else {
                        console.log("提交失败")
                    }
                }

            }




        },
        backIndex() {
            window.location.href = "../index.html"
        }
    },

})