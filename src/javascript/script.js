const mobileBtn = document.querySelector('#mobile_btn > i')
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').addClass('fa-x');
        $('#mobile_btn').find('i').toggleClass('fa-bars');
    });

    const sections = $('section');
    const navItem = $('.nav-item');

    $(window).on('scroll', function(){
       const header = $('header');
       const scrollPosition = $(window).scrollTop() - header.outerHeight();

       let activeSectionIndex = 0;
       
       if(scrollPosition <= 0){
         header.css('box-shadow', 'none');
       }else{
         header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
       };

       sections.each(function(i) {
          const section = $(this);
          const sectionTop = section.offset().top - 91;
          const sectionBottom = sectionTop + section.outerHeight();

          if(scrollPosition >= sectionTop && scrollPosition < sectionBottom ){
            activeSectionIndex = i;
            return false;
          }
       });

       navItem.removeClass('active')
       $(navItem[activeSectionIndex]).addClass('active')
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })
})