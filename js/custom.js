// // ######################################## #################### //
//              Services
// // ######################################## #################### //

// animate on scroll
$(function() {
  AOS.init();
});

// // ######################################## #################### //
//              Projects
// // ######################################## #################### //


$(function() {

  $("#Projects").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true
    }

  });
});

// // ######################################## #################### //
//              Navigation
// // ######################################## #################### //

$(function() {

  $(window).scroll(function() {
    // 50 PX BABY
    if ($(this).scrollTop() < 50) {
      // hide nav bar
      $("nav").removeClass("arthur-top-nav");


    } else {
      // show nav bar
      $("nav").addClass("arthur-top-nav");

    }


  });



});


// // ######################################## #################### //
//              Smmoth Scrolling
// // ######################################## #################### //
