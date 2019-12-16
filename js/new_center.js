kkpager.generPageHtml({
    pno : 10,
    //总页码
    total : 100,
    //总数据条数
    totalRecords : 1000,
    //链接前部
    hrefFormer : 'pager_test',
    //链接尾部
    hrefLatter : '.html',
    prePageText:'<',

    nextPageText:'>',
    isShowFirstPageBtn :false,
    isShowTotalPage:false,
    isShowLastPageBtn:false,
    isShowCurrPage:false,
    isGoPage :false,

    getLink : function(n){
        return this.hrefFormer + this.hrefLatter + "?pno="+n;
    }
    /*
    ,lang				: {
        firstPageText			: '首页',
        firstPageTipText		: '首页',
        lastPageText			: '尾页',
        lastPageTipText			: '尾页',
        prePageText				: '上一页',
        prePageTipText			: '上一页',
        nextPageText			: '下一页',
        nextPageTipText			: '下一页',
        totalPageBeforeText		: '共',
        totalPageAfterText		: '页',
        currPageBeforeText		: '当前第',
        currPageAfterText		: '页',
        totalInfoSplitStr		: '/',
        totalRecordsBeforeText	: '共',
        totalRecordsAfterText	: '条数据',
        gopageBeforeText		: ' 转到',
        gopageButtonOkText		: '确定',
        gopageAfterText			: '页',
        buttonTipBeforeText		: '第',
        buttonTipAfterText		: '页'
    }*/
    
    //,
    //mode : 'click',//默认值是link，可选link或者click
    //click : function(n){
    //	this.selectPage(n);
    //  return false;
    //}
});