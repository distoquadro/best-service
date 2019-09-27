$(document).ready(function() {
  $('.mobile-tab').hide();
      $('#burg').on('click',function(){
          $('.mobile-tab').slideToggle(100);
      })
      $('.your-class').slick({
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
        $('.slider-service').slick({
          infinite: true,
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 3000,
          speed: 700,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 684,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
});
function slowScroll(id){
  var offset = 0;
 $('body,html').animate({
   scrollTop: $(id).offset().top - offset}
   , 1500);
   return false;
}


