$(function () {
  $("#contact-us").click(function() {
      $('html,body').animate({
          scrollTop: $("#get-in-touch").offset().top},
          'slow');
  });
});
