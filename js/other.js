var urlheader = './html/common/header.html';
var urlfooter = './html/common/footer.html';


$('header').load(urlheader, function () {
    $('#header_top').click(function () {
        $('#bs_navbar').slideToggle();
    });
});

$('footer').load(urlfooter);


// header 切换效果展示

    var Location = window.location.href;
    var currentLocation = Location.split('/').pop();
    switch (currentLocation) {
        case "index.html":
            console.log(document.getElementsByClassName('index')[0])
            document.getElementsByClassName('index')[0].style.color="rgba(13, 76, 154, 1)"
            // $('.index').css('color', ' rgba(13, 76, 154, 1)');

            //$('.index').css('border-bottom', '2px solid #e74b4b')
            break;
        case "production.html":
            $('.product').css('color', ' rgba(13, 76, 154, 1)');
            // $('.product').css('border-bottom', '2px solid #e74b4b')
            break;
        case "solution.html":
            $('.solution').css('color', ' rgba(13, 76, 154, 1)');
            //$('.download').css('border-bottom', '2px solid #e74b4b')
            break;
        case "cooperative.html":
            $('.cooperative').css('color', ' rgba(13, 76, 154, 1)');
            //$('.service').css('border-bottom', '2px solid #e74b4b')
            break;
        case "new_center.html":
            $('.new_center').css('color', ' rgba(13, 76, 154, 1)');
            //$('.help_center').css('border-bottom', '2px solid #e74b4b')
            break;
        case "about_us.html":
            $('.about_us').css('color', ' rgba(13, 76, 154, 1)');
            //$('.help_center').css('border-bottom', '2px solid #e74b4b')
            break;
        case "contact_us.html":
            $('.contact_us').css('color', ' rgba(13, 76, 154, 1)');
            //$('.help_center').css('border-bottom', '2px solid #e74b4b')
            break;
    }























// 微博 公众号hover展示
$(document).on("hover", ".weibo", function () {
    console.log("1111")
});

$(".weibo").hover(function () {
    $(".weibo_img").css("display", "block");
    console.log("1111")
}, function () {
    $(".weibo_img").css("display", "none");
});


$(".wechat").hover(function () {
    console.log("2222")
<<<<<<< HEAD
    $(".wechat_img").css("display", "block");
}, function () {
    $(".wechat_img").css("display", "none");
});
=======
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
>>>>>>> 6352b77399f0be5d59e416072f1da7d2547d597b
