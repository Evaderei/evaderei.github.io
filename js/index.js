$(document).ready(function() {
    var homeHeight  = $(".section").innerHeight(),
        biographyHeight = 2 * homeHeight,
        portfolioHeight = 3* homeHeight;
    var mouseY, location;
    var scrollCount = 0;
    var scrolling = false;
  // This gets rid of the normal mouse wheel function, which causes jitters when 
    // Coupled with the on.scroll() animation that is incorporated later.
    $('body').on('mousewheel', function(event, delta){
            if (scrolling) {
                event.preventDefault();
            }
        });
 function resize () {
   homeHeight = $(".section").innerHeight();
    biographyHeight = 2 * homeHeight;  
    portfolioHeight = 3* homeHeight;
 }
  $(window).resize(function () {
   // console.log("I've been resized!");
    resize();
  });
  
  
  //========================
  // NAV BAR FUNCTIONALITY
  //========================
    
  // ----
  // makes sure nav bar selected is right after scrolling
  // -----
  $(window).scroll( function () {
    // Distance scrolled from top 
    // console.log($(this).scrollTop());
    let dist = $(this).scrollTop();
 
    if (dist < homeHeight) {
      scrollCount = 0;
    }
    else if (dist >= homeHeight && dist < biographyHeight) {
      scrollCount = 1;
    }
    else if (dist >= biographyHeight && dist < portfolioHeight) {
      scrollCount = 2;
    }
    else {
      scrollCount = 3;
    }
     checkAndMark();
  });
  
  //
  // Changes nav bar selected based on what's clicked 
  //
  
  $("nav ul>li").on("click", function () {
    homeHeight = $(".section").innerHeight(); // Recheck height on scrolls
    biographyHeight = 2 * homeHeight;  
    portfolioHeight = 3* homeHeight;
        
    console.log(this.id);
    if (this.id == "#home") {
      scrollCount = 0;
    $('html, body').stop().animate({
              scrollTop: 0
            }, 100, function () {
            });
    }
    else if (this.id == "#biography") {
      scrollCount = 1;
    $('html, body').stop().animate({
              scrollTop: homeHeight
            }, 100, function () {
            });
    }
    else if (this.id == "#portfolio") {
      scrollCount = 2;
    console.log("scrolling to portfolio, your highness");
            $('html, body').stop().animate({
              scrollTop: biographyHeight
            }, 100, function () {
            });
      }
    else if (this.id == "#contact")
      {
        scrollCount = 3;
    console.log("scrolling to contacts, your holiness");
            $('html, body').stop().animate({
              scrollTop: portfolioHeight
            }, 100, function () {
            });
      }
    // checkAndMark();
    });
  
  //
  // Changes color based on
  //
  function checkAndMark () {
    if (scrollCount == 0) {
      $("nav ul li:nth-child(1)").addClass("selected");
      $("nav ul li:nth-child(2)").removeClass("selected");
      $("nav ul li:nth-child(3)").removeClass("selected");
      $("nav ul li:nth-child(4)").removeClass("selected");
    }
    else if (scrollCount == 1) {
      $("nav ul li:nth-child(1)").removeClass("selected");
      $("nav ul li:nth-child(2)").addClass("selected");
      $("nav ul li:nth-child(3)").removeClass("selected");
      $("nav ul li:nth-child(4)").removeClass("selected");
    }
    else if (scrollCount == 2) {
      $("nav ul li:nth-child(1)").removeClass("selected");
      $("nav ul li:nth-child(2)").removeClass("selected");
      $("nav ul li:nth-child(3)").addClass("selected");
      $("nav ul li:nth-child(4)").removeClass("selected");
    }
    else if (scrollCount == 3) {
      $("nav ul li:nth-child(1)").removeClass("selected");
      $("nav ul li:nth-child(2)").removeClass("selected");
      $("nav ul li:nth-child(3)").removeClass("selected");
      $("nav ul li:nth-child(4)").addClass("selected");
    }
  }
  
  

  
  
  // TEST AREA
  $(window).scrollTop($(".section").innerHeight() * 3);
  checkAndMark();
  // END OF TEST AREA
  
  
  
  /* End of Document Ready function */
});