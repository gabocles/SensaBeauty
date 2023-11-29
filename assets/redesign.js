

if ($(window).width() >= 1200) {  
$('.category-row').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }
    }
  ]
});
}
if ($(window).width() >= 650) {  
$('.featured-collection .product-grid').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
}
$('.section-collection-list .collection-list').slick({
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
        arrows: true
      }
    }
  ]
});

var href = location.href;
var x = (href.match(/([^\/]*)\/*$/)[1]);
document.body.classList.add(x);
$( document ).ready(function() {
chatinterval = setInterval(function(){
    var slider = $('product-recommendations ul').length;
    if(slider == 1){
          $('.featured-collection ul').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            responsive: [
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  centerMode: false
                }
              }
            ]
          });
    clearInterval(chatinterval);
    }else{
    }
}, 1000);
});
$(document).ready(function() {
  $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);
      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    } 
  });
});

  const tabs = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__body');
  if (tabsContent.length > 0 || tabs.length > 0) {
      function hideTabContent() {
          tabsContent.forEach(item => {
              item.classList.remove('active');
          });
          tabs.forEach(item => {
              item.classList.remove('active');
          });
      }
      function showTabContent(i = 0) {
          tabsContent[i].classList.add('active');
          tabs[i].classList.add('active');
      }
      hideTabContent();
      showTabContent();
      tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          hideTabContent();
          showTabContent(index);
      });
    });
  }

var oldValues = null;
$(document)
.on("click", ".editButton", function () {
  var section = $(this).closest(".formSection");
  var otherSections = $(".formSection").not(section);
  var inputs = section.find("input");
  section
    .removeClass("readOnly");
  otherSections
    .addClass("disabled")
    .find('button').prop("disabled", true);
  oldValues = {};
  inputs
    .each(function () { oldValues[this.id] = $(this).val(); })
    .prop("disabled", false);
})

.on("click", ".cancelButton", function (e) {
  var section = $(this).closest(".formSection");
  var otherSections = $(".formSection").not(section);
  var inputs = section.find("input");
  section
    .addClass("readOnly");
  otherSections
    .removeClass("disabled");
  $('button').prop("disabled", false);
  inputs
    .each(function() { $(this).val(oldValues[this.id]); })
    .prop("disabled", true)
  e.stopPropagation();
  e.preventDefault();
});

$('.multicolumn  .slider-mobile-gutter .multicolumn-list').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
        arrows: true
      }
    }
  ]
});

$('.spotlight-section .spotlight-wrapper').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
$('.icon-section .icons').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  dots: false,
  cssEase: 'linear'
});

var _in = function() {
  var dis = this;
  var t = setTimeout(function() {
    $(dis).removeData("timer");
    $(dis).addClass("active")
  }, 300);
  $(this).data("timer",t);
}
var _ot = function() {
    if($(this).data("timer")) {
        clearInterval($(this).data("timer"));
        $(this).removeData("timer");
    }
    $(this).removeClass("active")
}
$(".mega-dropdown").mouseenter(_in);
$(".mega-dropdown").mouseleave(_ot);
$(document).ready(function() {
  $(".mega-menu > li > a").on("click", function() {
    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active");
    } else {
      $(".mega-menu > li > a").parent().removeClass("active");
      $(this).parent().addClass("active");
    }
  });
});

$('body.product_detail .grid__item .accordion:first-child details').attr('open','true');

// account page delete functionlity added
$(".info button").click(function(){
   var customer_data = $(this).attr("data-target");
   console.log("customer_data");
    $('ul li button[data-target="'+customer_data+'"]').trigger( "click" );
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("#shopify-section-header").addClass("shopify-section-header-sticky");
    } else {
        $("#shopify-section-header").removeClass("shopify-section-header-sticky");
    }
});

// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     infinite: false,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     vertical:true,
//     asNavFor: '.slider-for',
//     dots: false,
//     arrows: false,
//     focusOnSelect: true,
//     verticalSwiping:false,
//     infinite: false,
//     centerMode: false,
//     centerPadding: '0px',
//     responsive: [
//     {
//         breakpoint: 992,
//         settings: {
//           vertical: true,
//         }
//     },
//     {
//       breakpoint: 749,
//       settings: {
//         vertical: false,
//       }
//     },
//     {
//       breakpoint: 580,
//       settings: {
//         vertical: false,
//         slidesToShow: 3,
//       }
//     },
//     {
//       breakpoint: 380,
//       settings: {
//         vertical: false,
//         slidesToShow: 2,
//       }
//     }
//     ]
// });

$("#icon-popup").click(function(){
  $(".icon-pop").toggleClass("hide");
});

$("#icon-popup").click(function(){
  $("#popup-overlay").toggleClass("hide");
});

$("#popup-overlay").click(function(){
  $("#popup-overlay").toggleClass("hide");
});

$("#popup-overlay").click(function(){
  $(".icon-pop").toggleClass("hide");
});

// Account page tabbing click event 
 $(document).on("click", ".tabs__navigation button.tabs__btn", function () {
  var tab_id = $(this).attr('data-tab');
  $('.tabs__navigation button.tabs__btn').removeClass('active');
  $('.tabs__content .tabs__body').removeClass('active');
  $(this).addClass('active');
  $("#"+tab_id).addClass('active');
}); 

// Addrres onclick event Content hide or show
$(".add-address").attr("aria-expanded", "false");
$(document).on("click", ".section.account .tabs__content .address_info .add-address", function (e) {
  e.preventDefault();
  var $this = $(this);
  var currentValue = $this.attr('aria-expanded');
  $this.attr('aria-expanded', !(currentValue === 'true'));
});


$('label').click(function(e) {
  var abcd = $('label').attr('data-slide');
   var slideno = $(this).data('slide');
   $('.slider-for').slick('slickGoTo', slideno - 1);
 });

// Product page text review click event
$(document).ready(function(){
    $(document).on('click','.spr-stars',function(){
         $(document).scrollTop( $("#shopify-product-reviews").offset().top - 150);  
    });
});

// console.log('Optimize Test Initializing...');
// let domCheck;
// const doDomCheck = function(){
//   //console.log('Found elements.');
  
//   el1 = document.querySelector('.slick-arrow');
//   if(el1){
//       clearInterval (domCheck);
//       $('body').addClass('slider-loaded');
//   }
// }
// domCheck = setInterval(doDomCheck,200);
