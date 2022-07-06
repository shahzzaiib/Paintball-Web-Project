$(document).ready(function(){
  $('mytab').owlCarousel({
    loop:true,
    margin:1,
  center:false,
  autoWidth:true,
  dots:false,
  mouseDrag:true,
  autoplay:false,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  mergeFit:true,
  stagePadding:false,
  nav: false,
    navText: ["<div class='left-nav' ><i class='fas fa-chevron-left'></i></div>","<div class='right-nav'><i class='fas fa-chevron-right'></i></div>"],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        993:{
            items:3
        },
        1200:{
            items:4
        }
    } 
});
});




$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").toggleClass("slow").css({"transition": "all 0.5s ease"});
    });
    $("#close").click(function(){
        $("#panel").toggleClass("slow").css({"transition": "all 0.5s ease"});
    });
});




// Search Start //
    $(document).ready(function(){
        $("#click").click(function(){
        $("#show").animate({width: 'toggle'},500);
        });
    });



$(document).ready(function() {

  $('#mytab').owlCarousel({
    loop:true,
    margin:10,
  center:false,
  dots:false,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/lefta.png' /></div>","<div class='right-nav1'><img src='im/righta.png' /></div>"],
      responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },

        1000:{
            items:4
        },

        1200:{
            items:5
        }
    } 
});
  });



$(document).ready(function() {

  $('#featured').owlCarousel({
    loop:true,
    margin:20,
  center:false,
  dots:false,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/left.jpg' /></div>","<div class='right-nav1'><img src='im/right.jpg' /></div>"],
      responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },

        1000:{
            items:4
        },

        1200:{
            items:4
        }
    } 
});
  });









$(document).ready(function() {

  $('#new').owlCarousel({
    loop:true,
    margin:20,
  center:false,
  dots:true,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/left.jpg' /></div>","<div class='right-nav1'><img src='im/right.jpg' /></div>"],
      responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },

        1000:{
            items:4
        },

        1200:{
            items:2
        }
    } 
});
  });





$(document).ready(function() {

  $('#p1').owlCarousel({
    loop:true,
    margin:0,
  center:false,
  dots:true,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/left.jpg' /></div>","<div class='right-nav1'><img src='im/right.jpg' /></div>"],
      responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },

        1000:{
            items:7
        },

        1200:{
            items:7
        }
    } 
});
  });





$(document).ready(function() {

  $('#new').owlCarousel({
    loop:true,
    margin:25,
  center:false,
  dots:true,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/left.jpg' /></div>","<div class='right-nav1'><img src='im/right.jpg' /></div>"],
      responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },


        1000:{
            items:4
        },

        1200:{
            items:4
        }
    } 
});
  });










$(document).ready(function() {

  $('#instagram').owlCarousel({
    loop:true,
    margin:1,
  center:false,
  dots:true,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  nav: true,
    navText: ["<div class='left-nav1' ><i class='fas fa-chevron-left'></i></div>","<div class='right-nav1'><i class='fas fa-chevron-right'></i></div>"],
      responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },

        1000:{
            items:4
        },

        1200:{
            items:6
        }
    } 
});
  });





$(document).ready(function() {

  $('#owl-demo').owlCarousel({
    loop:true,
    margin:25,
  center:false,
  dots:true,
  mouseDrag:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  nav: false,
    navText: ["<div class='left-nav1' ><img src='im/left.jpg' /></div>","<div class='right-nav1'><img src='im/right.jpg' /></div>"],
      responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },

        1000:{
            items:4
        },

        1200:{
            items:6
        }
    } 
});
  });


/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);








$(document).ready(function(){
    $("#mobile-menu-open").click(function(){
        $("#mobile-menu-show").toggleClass("mobile-show").css({"transition": "all 0.7s ease"});
    });

    $("#mobile-menu-close").click(function(){
        $("#mobile-menu-show").toggleClass("mobile-show").css({"transition": "all 0.3s ease"});
    });
});



window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 150) nav.className = ''; else nav.className = 'scroll';
};




$(document).ready(function() {
            /*
            * Plugin intialization
            */
            $('#pagepiling').pagepiling({
                menu: '#menu',
                anchors: ['banner', 'catagoury', 'achievement', 'video', 'footer'],
                sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                navigation: {
                    'position': 'right',
                    'tooltips': ['banner', 'catagoury', 'achievement', 'video', 'footer']
                },
                afterRender: function(){
                    $('#pp-nav').addClass('custom');
                },
                afterLoad: function(anchorLink, index){
                    if(index>1){
                        $('#pp-nav').removeClass('custom');
                    }else{
                        $('#pp-nav').addClass('custom');
                    }
                }
            });
            /*
            * Internal use of the demo website
            */
            $('#showExamples').click(function(e){
                e.stopPropagation();
                e.preventDefault();
                $('#examplesList').toggle();
            });
            $('html').click(function(){
                $('#examplesList').hide();
            });
        });




/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);




function counter(){   
    $('.count').each(function(){
        if ($(this).hasClass('start')){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if(elementBottom > viewportTop && elementTop < viewportBottom){
                $(this).removeClass('start');
                $(this).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        }
    });
}
$(window).on('scroll', counter);
$(document).on('ready', counter);




