// (function($) { // Begin jQuery
//   $(function() { // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       // Close one dropdown when selecting another
//       $('.nav-dropdown').not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//     });
//     // Toggle open and close nav styles on click
//     $('#nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//     });
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//     });
//   }); // end DOM ready
// })(jQuery); // end jQuery

// if($(".toggle").css("display") === "none !imortant") {
//   $("#banner").prependTo("#menu").remove();
// }
// $("#banner").prependTo("#menu").remove();


// $(document).ready(function() {
//   if($("#toggle-close").css("display") === "block") {
//     $("#hello").insertBefore(".ul-nest");
//   } else if($("#toggle-close").css("display") === "none") {
//     $("#hello").insertBefore("#brand");
//   }
// })

// $(window).resize(function() {
//   if($("#toggle-close").css("display") === "block") {
//     $("#hello").insertBefore(".ul-nest");
//   } else if($("#toggle-close").css("display") === "none") {
//     $("#hello").insertBefore("#brand");
//   }
// })

$(document).ready(function() {
  if($("#toggle-close").css("display") === "block") {
    $("#login").insertBefore(".ul-nest");
    $("#phone").insertBefore(".ul-nest")
  } else if($("#toggle-close").css("display") === "none") {
    $("#login").insertAfter("#sale");
    $("#phone").insertBefore("#sale")
  }
})

$(window).resize(function() {
  if($("#toggle-close").css("display") === "block") {
    $("#login").insertBefore(".ul-nest");
    $("#phone").insertBefore(".ul-nest")
  } else if($("#toggle-close").css("display") === "none") {
    $("#login").insertAfter("#sale");
    $("#phone").insertBefore("#sale")
  }
})

$("footer ul li").prepend("<hr />")


$('<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>').prependTo(".footer-lis")



// $(document).ready(function() {
//   $(window).resize(function() {
//     if($(".toggle").css("display") === "none") {
//       $("#banner").prependTo("#menu").remove();
//     } else {
//       ("#banner").prependTo("#nav").remove();
//     }
//   })
//   $("#reg").click(function () {
//    if ($("#frm01").is(':hidden')) {
//      $("#frm01").show("slide", { direction: "down" }, 1000);
//    } else {
//      $("#frm01").hide(1000);
//    }
//  });
// });

// $(document).ready(function() {
//   // run test on initial page load
//   checkSize();

//   // run test on resize of the window
//   $(window).resize(checkSize());
// });

// function checkSize() {
//   if($(".toggle").css("display") === "auto") {
//     $("#banner").prependTo("#menu").remove();
//   }
// }



  
 
