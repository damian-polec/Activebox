$(function(){
  var heroOffSet = $('#hero').offset().top,
      featuresOffSet = $('#features').offset().top,
      worksOffSet = $('#works').offset().top;

  $(document).scroll(function(){
    if ($(document).scrollTop() >= heroOffSet && $(document).scrollTop() < featuresOffSet){
      $('.navbar').css('background', 'none');
      $('.navbar').css('transition', '.3s');
    } else if (($(document).scrollTop() >= featuresOffSet) && ($(document).scrollTop() < worksOffSet)){
      $('.navbar').css('background', 'rgba(41, 45, 71, 0.93)');
      $('.navbar').css('transition', '.3s');
    }
  });
});
