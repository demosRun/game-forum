$(function () {
  new Swiper('.swiper-container-pPX8XxuUyIehAAEu', {
    pagination: '.pagination-pPX8XxuUyIehAAEu',
    paginationClickable: true,
    autoplay: 3000
  })

  $('.swiper-zBLJxURsOhhagFAH ul').roundabout({
    easing: 'easeOutInCirc',
    duration: 600,
    btnNext: ".next",
    btnPrev: ".prev"
  })

  var swiper = new Swiper('.swiper-container-gvO4afIYFIhURa72', {
    pagination: '.pagination-gvO4afIYFIhURa72',
    autoplay: true,
    loop: true,
    paginationClickable: true,
    autoplay: 3000
  })

  $('.prev-gvO4afIYFIhURa72').click(function(){
    swiper.swipePrev()
  })

  $('.next-gvO4afIYFIhURa72').click(function(){
    swiper.swipeNext()
  })
})