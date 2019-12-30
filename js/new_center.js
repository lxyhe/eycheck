// var app = new Vue({
//     el: "#body",
//     data: {

//         isShowLIst: true,

//     },
//     mounted: {

//     },
//     methods: {

//         goNewpage() {
//             console.log("1111")
//         },

//     }
// })
$('.list').click(()=>{
    window.location.href="./new_page.html"
})
kkpager.generPageHtml({
    pno: 1,
    //总页码
    total: 10,
    //总数据条数
    totalRecords: 100,
    //链接前部
    hrefFormer: 'pager_test',
    //链接尾部
    hrefLatter: '.html',
    prePageText: '<',

    nextPageText: '>',
    isShowFirstPageBtn: false,
    isShowTotalPage: false,
    isShowLastPageBtn: false,
    isShowCurrPage: false,
    isGoPage: false,

    getLink: function (n) {
        return this.hrefFormer + this.hrefLatter + "?pno=" + n;
    }

});