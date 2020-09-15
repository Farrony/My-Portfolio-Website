$(document).ready(function(){
    // meanMenu js 
    $('#mobile-menu').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: '.mobile-menu'
    });


    // slick slider active 
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        accessibility: false
      });
      

    // wow active 
    new WOW().init();


    // scroll up js 
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="far fa-arrow-alt-circle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    // typed js 
    var typed3 = new Typed('#typed', {
      strings: [  'I am professional full stack web developer',
                  'I provide pixel perfect design and',
                  'Fully responsive design'
              ],
      typeSpeed: 30,
      backSpeed: 20,
      smartBackspace: true, // this is a default
      loop: true
  });

    // ============Fixed Navbar==========================
    $(window).scroll(function(){
      var ourwindow = $(this).scrollTop();
      if(ourwindow){
          $('nav').addClass('fixed-nav');
      } else{
          $('nav').removeClass('fixed-nav');
      }
    });
    // =========Navbar-nav-active========================
    $('.navbar-nav .nav-item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });

    // feather js active 
    feather.replace()
    
    // filterizer js 
    var filterizd=$('.filtr-container').filterizr();
    // =========filterizer-active btn====================
    $('.button-area button').click(function(){
      $(this).addClass('portfolio-active').siblings().removeClass('portfolio-active');
    });

    // fancybox active 
    $('[data-fancybox]').fancybox({
      animationEffect : "slide",
      transitionEffect : "circular",
      loop : true,
      keyboard: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        // "fullScreen",
        //"download",
        "thumbs",
        "close"
      ],
    });

    // counter up     
    $('.counter').counterUp({
      delay: 20,
      time: 2000
    });

    // testiminial slider 
    $('.testimonial-active').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      arrows:false,
      dots : true,
      accessibility: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


})