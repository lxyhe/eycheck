var urlheader = './html/common/header.html';
var urlfooter = './html/common/footer.html';


$('header').load(urlheader, function(){
    $('#header_top').click(function(){
        $('#bs_navbar').slideToggle();
    });
});

$('footer').load(urlfooter);