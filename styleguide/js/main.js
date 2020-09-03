function anchorLinks() {
  $(".sg_doc dt").click(function() { 
    window.location.href = "#" + this.id;
  })
}

function targetExt() {
  $(".sg_doc a[href^='http']").attr("target","_blank").addClass("ext");
}

function sidebarButton() {
  var $button = $('.sg_sidebar_button');
  $button.click(function(e) {
    e.preventDefault();
    $(this).parents('.sg-pusher').toggleClass('show_sidebar');
  });
}

$(document).ready(function() {
  anchorLinks()
  sidebarButton();
  targetExt();
});