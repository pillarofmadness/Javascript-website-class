$(function() {
    $('.miniature').css('border','5px white solid');
	$('.miniature').css('width','100px');
    $('img:first').css('border','5px black solid');
	$('.Info').css('display','none');
	
	$('.miniature2').css('border','5px white solid');
	$('.miniature2').css('width','100px');
    $('img:first').css('border','5px black solid');
	$('#'+$('img:first').attr('alt')).css('display','block');
	
	
    $('.miniature').click(function() {
      $('img').css('border','5px white solid');
      $(this).css('border','5px black solid');
      var nom = $(this).attr('id');
      $('#grand').attr('src',nom);
    });  
	
	$('.miniature2').click(function() {
      $('img').css('border','5px white solid');
	  $('.Info').css('display','none');
      $(this).css('border','5px black solid');
      var nom = $(this).attr('id');
	  var info = $(this).attr('alt');
      $('#grand2').attr('src',nom);
	  $('#'+info).css('display','block');
    });
  });