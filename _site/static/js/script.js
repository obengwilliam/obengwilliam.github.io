



$('<img/>').attr('src','static/css/obeng1.jpg').load(
	function() {
	jQuery('#logo').fadeIn(1000, function() {
		jQuery('h1').animate({opacity: '1', 'padding-top': '0'}, 500,function() { console.log("hey your was");});
	});
});

$(document).ready( function(){
     $("#logo").fadeOut(1000);
     console.log("hw do");

	});




