var app = new Vue({
    el: "#body",
    data: {

        isShowLIst: true,
        accountList: [{
            name: '个人商户',
            id: 1
        }, {
            name: '企业商户',
            id: 2
        }, {
            name: '政府商户',
            id: 3
        }],
        commercial: '个人商户',
        commercialID: "1",
        isShowModal: false
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
        },
        submitData() {
            this.isShowModal = !this.isShowModal
        },
        backIndex(){
            window.location.href="../index.html"
        }
    }
})