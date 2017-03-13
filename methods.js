function getInTouchScroll() {
    $("html,body").animate({
        scrollTop: $("#get-in-touch").offset().top
      },
      "slow");
  }

  $(document).ready(function(){
    if(window.location.href.indexOf("contact-us") > -1){
        getInTouchScroll();
    }
  });

  $(function () {
   $("#contact-us").click(function() {
    getInTouchScroll();
   });
 });
