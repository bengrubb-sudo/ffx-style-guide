// SmoothScroll
function smoothScroll() {
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    var hash = this.hash;
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    console.log(target);
    // Scroll to the element
    $('html, body').animate({ scrollTop: target.offset().top }, 500, function (){
        location.hash = hash;
    });
  return false;
  });
}

// Target External Links
function TargetExt() {
  $(".sg_doc a[href^='http']").attr("target","_blank").addClass("ext");
}

// Sidebar Button
function sidebarButton() {
  var $button = $('.sg_sidebar_button');

  $button.click(function(e) {
    e.preventDefault();
    $(this).parents('.sg-pusher').toggleClass('show_sidebar');
  });
}

//Functions that run when all HTML is loaded
$(document).ready(function() {
  smoothScroll();
  TargetExt();
  sidebarButton();
});