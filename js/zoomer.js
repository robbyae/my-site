$(document).ready(function(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        $('.zoom-span')
        .zoom();
        $('#hover-zoom').css('display','block');
    }
    // if($(window).width() >= '800') {
    //     $('.zoom-span')
    //     .zoom();
    // }
  });