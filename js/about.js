$(document).ready(function(){
	$('#example').superfish();
	jQuery('.header .main-menu').meanmenu({
		meanScreenWidth: 767
		
	});  
		
		
	// Scroll to Top
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100){  
            $('.header').addClass("sticky");
            $('.scrollup').show();
        }
        else{
            $('.header').removeClass("sticky");
            $('.scrollup').hide();
        }
    });

    // Click event to scroll to top
    $('.scrollup').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

	// Animation in animate.css
		new WOW().init();
	});
