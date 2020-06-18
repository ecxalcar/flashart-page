$(document).ready(function(){
	$("#btn-menu").click(function() {
        $(this).toggleClass("open");
    });

    $("#btn-menu").click(function() {
        $(".bg-nav").slideToggle();
    });

	$('.single-item').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
	});
});