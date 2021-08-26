$(document).ready(function(){

   $('#product-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav: false,
  dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

});