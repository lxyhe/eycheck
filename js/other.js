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
    $(".wechat_img").css("display", "block");
}, function () {
    $(".wechat_img").css("display", "none");
});