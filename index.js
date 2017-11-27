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







  
 
