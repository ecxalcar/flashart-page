$(document).ready(function(){
	$("#btn-menu").click(function() {
        $(this).toggleClass("open");
    });
	
    $("#btn-menu").click(function() {
		$(".bg-nav").slideToggle();
	});
	
    $(".bg-nav .container ul li a").click(function() {
		$(".bg-nav").slideUp();
		$('#btn-menu').removeClass("open");
	});
	


	$('.single-item').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('body').flipLightBox({
		lightbox_text_status: 0,
		lightbox_navigation_status: 0
	});
});