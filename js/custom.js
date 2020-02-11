
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			pager:true
			
		});
		
		
		$('.owl-carousel').owlCarousel({
			margin:25,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
			autoplay:true,
			dotsSpeed:1000,
			navSpeed:1000,
			autoplaySpeed:500,
			responsiveClass: true,
			responsive:{
				0:{
					items: 1,
					nav: false,
					dots: false,
					loop:true
				},
				400:{
					items: 2,
					nav: true,
					loop:true
				},
				768:{
					items: 3,
					nav: true,
					loop:true
				},
				1000:{
					items: 4,
					nav: true,
					loop:true
				}
			}
			
			
			
		});
		
		jQuery('.slide-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            dotsSpeed: 800,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
					loop: true
                },
                600: {
                    items: 1,
                    nav: true,
					loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false
                }
            }
        });
		
		jQuery('.slide-carousel').on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        jQuery('.slide-carousel').on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });
		
		
		
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
		
		$('.filtr-container').filterizr();
		
		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });
	});
