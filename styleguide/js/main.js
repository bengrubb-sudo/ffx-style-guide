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
  TargetExt();
  sidebarButton();
});