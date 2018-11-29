$('#navigation').ready(function() {
	$('.dropdown').hover(function() {
		$(this).find('.sub_navigation').slideToggle();
	});
});
$(function(){
    $('ul#navigation li').hover(function(){
        //$('#drop' , this).css('display','block');
         $(this).children('ul').delay(20).slideDown(200);
    }, function(){
         $(this).children('ul').delay(20).slideUp(200);
    });
});
