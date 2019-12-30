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

var content = document.getElementById('body');
content.style = "position: relative;";
var customerService = document.createElement("div");
customerService.className = "lisAndPhone"
customerService.style = "position: absolute; top:640px; right:24px;"
customerService.innerHTML = `<img style="width: 48px; height: 48px; background-color: #0D4C9A; display: block;border-bottom: 1px solid #fff;cursor: pointer;" src="../imgs/在线联系.png">
                            <img style="width: 48px; height: 48px; background-color: #0D4C9A;cursor: pointer;" src="../imgs/电话联系.png">`
content.appendChild(customerService);