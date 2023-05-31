$(document).ready(function(){
    $('.slider').slick({
        // arrows:true,
        nextArrow:' <div class="slider-item__arrows-right"></div>',
        prevArrow:'<div class="slider-item__arrows-left"></div>',
        
        asNavFor: '.slider2',
        
        
    });
    $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider',
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
       
        
        
      });
      
      new WOW().init();
  
});
  /* ================= MOBILE NAV ========================= */
  const mobileNavButton = document.querySelector('.mobile-nav-button');
  const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
  const mobileNav = document.querySelector('.mobile-nav');

  
  mobileNavButton.addEventListener('click', function () {
      mobileNavIcon.classList.toggle('active');
      mobileNav.classList.toggle('active');
    
      document.body.classList.toggle('no-scroll');
  });
