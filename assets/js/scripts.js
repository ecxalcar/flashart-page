$(document).ready(function(){
	$("#btn-menu").click(function() {
        $(this).toggleClass("open");
    });

    $("#btn-menu").click(function() {
		$(".bg-nav").slideToggle();
	});

	// ==============Menu Globally available options==============
    $('ul li').click(function(){
        // alert(id);
        $('li').removeClass("active");
        $(this).addClass("active");
    });

    $('ul li a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('data-id');
        goToByScroll(id);
        // var url = '?option=' + id;
        // history.pushState({}, null, url);
	});

	function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
		var header = $('header').height();
		console.log(header);
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top - header
        }, 'slow');
    }

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