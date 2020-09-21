
// manu fixed 

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()

  if(scrollamount > 500){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }
  if(scrollamount > 600){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})




$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// vanuBox 


$('.venobox').venobox();

// team part

// $('#team-part .item').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 575,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });



// testimonial 

$('#testimonial-part .mainSlider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// counter part

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$('#adv-part .img').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// class part

$("#colorful").colorfulTab();    
        
$("#colorful-elliptic").colorfulTab({
    theme: "elliptic"
}); 

$("#colorful-flatline").colorfulTab({
    theme: "flatline"
});    

$("#colorful-background-image").colorfulTab({
    theme: "flatline",
    backgroundImage: "true",
    overlayColor: "#002F68",
    overlayOpacity: "0.8"
}); 


// wow js

new WOW().init();
