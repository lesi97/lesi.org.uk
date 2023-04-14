// below is for the ltoe pic
$(document).ready(function(){
		
$('.forTheMeme').hover(function(){
	$(this).animate({opacity:'1', width:'800px', height:'800px'}, "fast");
	$(this).animate({opacity:'1', width:'650px', height:'650px'}, "slow");
	}, function (){
	$(this).animate({opacity:'1', width:'1px', height:'1px'});			
});

	//alert("meowdy")
		
$('#lul').slideUp(0)		

		
if ($(window).width() < 960) {
 	('#lul').hide();
}		
else {
  $('.box').hover(function(){
	  $('#lul').slideDown(1400);
  	  }, function (){
	  $('#lul').slideUp(100);
  	  });
}	
})