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

console.log(currentLocation)
setTimeout(() => {
    switch (currentLocation) {
        case "index.html":
            $('.index_1').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "production.html":
            $('.production_2').css('color', ' rgba(13, 76, 154, 1)');
            $('.production_2').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "solution.html":
            $('.solution_3').css('color', ' rgba(13, 76, 154, 1)');
            $('.solution_3').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "cooperative.html":
            $('.cooperative_4').css('color', ' rgba(13, 76, 154, 1)');
            $('.cooperative_4').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "new_center.html":
            $('.new_center_5').css('color', ' rgba(13, 76, 154, 1)');
            $('.new_center_5').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "about_us.html":
            $('.about_us_6').css('color', ' rgba(13, 76, 154, 1)');
            $('.about_us_6').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
        case "contact_us.html":
            $('.contact_us_7').css('color', ' rgba(13, 76, 154, 1)');
            $('.contact_us_7').css('border-bottom', '2px solid rgba(13, 76, 154, 1)');

            break;
    }

}, 100)





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
    $(".wechat_img").css("display", "block");
}, function () {
    $(".wechat_img").css("display", "none");
});


// fixed  服务 联系方式
var content = document.getElementById('body');
content.style = "position: relative;";
var customerService = document.createElement("div");
customerService.className = "lisAndPhone"
customerService.style = "position: fixed; top:640px; right:24px;z-index:100"
customerService.innerHTML = `<img style="width: 48px; height: 48px; background-color: #0D4C9A; display: block;border-bottom: 1px solid #fff;cursor: pointer;" src="../imgs/在线联系.png">
                            <img style="width: 48px; height: 48px; background-color: #0D4C9A;cursor: pointer;" src="../imgs/电话联系.png">`
content.appendChild(customerService);