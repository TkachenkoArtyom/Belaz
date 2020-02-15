document.addEventListener("DOMContentLoaded", function() {

  let descr = document.querySelector('.description'),
    showDescr = document.querySelectorAll('.show-descr'),
    block = document.querySelector('.questions__list--wrapper');

  block.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('show-descr')) {
      // console.log();
     

          // descr.style.display = 'block'
      
      // descr.style.display = 'block'
    }
  })
  block.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('show-descr')) {
       descr.style.display = 'none'
    }
  })
  
    
    // owl-carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    lazyLoad: true,
    nav: true,
    smartSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>'
    ],
  
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  // LazyLoad
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });
// Scroll To Id

  $("a").mPageScroll2id({
   offset: 100
  });

});
