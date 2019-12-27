var urlheader = './html/common/header.html';
var urlfooter = './html/common/footer.html';


$('header').load(urlheader, function(){
    $('#header_top').click(function(){
        $('#bs_navbar').slideToggle();
    });
});

$('footer').load(urlfooter);



$(document).on("hover", ".weibo", function () {
    console.log("1111")
});

$(".weibo").hover(function(){
    $(".weibo_img").css("display","block");
    console.log("1111")
},function(){
    $(".weibo_img").css("display","none");
});


$(".wechat").hover(function(){
    console.log("2222")
    $(".wechat_img").css("display","block");
},function(){
    $(".wechat_img").css("display","none");
});