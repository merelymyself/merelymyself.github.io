$(document).ready(function() {
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		console.log("scrolled");	
		if (st > 10) {
		   $("#toptext").css({
			   "font-size": "20px", 
			   "top": "0px",
			   "left": "10px",
		   });
		} else {
		   $("#toptext").css({
			   "font-size": "50px", 
			   "top": "30px",
			   "left": "20px",
		   });
		}
	});
})
