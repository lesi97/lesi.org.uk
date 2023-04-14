// JavaScript Document

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
  $('main').hover(function(){	
	  $('#lul').slideDown(1400);
  	  }, function (){
	  $('#lul').slideUp(100);
  	  });
}
	

/*------[below makes nav and section same height]--------*/
/*
$(window).load(function(){
var $higBdy = $("section").height(); 
var $higRite = $("nav").height();

if($higBdy > $higRite){
	$("nav").css("height", $higBdy);
	$("section").css("height", $higBdy);
}else{
	$("section").css("height", $higRite);
	$("nav").css("height", $higRite);
	}
});
*/
	
	
	
	
		
		
		
		
	
});		// End tag for document.ready function