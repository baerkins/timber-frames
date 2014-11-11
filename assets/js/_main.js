// Main JS File
$(document).ready(function(){

  // Template Navigation
  $('.template-nav-trigger').click(function(event){
    event.preventDefault();
    var target = $(this).attr('data-target');
    $(this).toggleClass('open-nav');
    $(target).toggleClass('open');
  });

  // Layouts
  var headerNavHeight = $('header').find('.navbar').height();
  $('.logo').height(headerNavHeight);

  $('.square').each(function() {
    var width = $(this).width();
    $(this).height(width);
  });

});