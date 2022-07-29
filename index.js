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
	$("#list1hover").click(function() {
		help("#list1hover", "#list1hover2", "#list1", "#list1txt", "#list1txt2");
	});
})

function help(helpbutton, gobutton, bar, origmsg, newmsg) {
	if ($(bar).css("background-position") == "0px -100%") {
		$(bar).css({ "background-position": "0% 0%", });
		$(newmsg).css({"opacity":"0"});
		$(origmsg).css({"opacity":"1"});
		$(helpbutton).css({"background-color":"#ECEFF4"});
		$(helpbutton).children().css({"color":"black"});
		$(gobutton).css({"background-color":"#ECEFF4"});
		$(gobutton).children().css({"color":"black"});
	}
	else {
		$(bar).css({ "background-position": "0px -100%", });
		$(newmsg).css({"opacity":"1"});
		$(origmsg).css({"opacity":"0"});
		$(helpbutton).css({"background-color":"#5E81AC"});
		$(helpbutton).children().css({"color":"white"});
		$(gobutton).css({"background-color":"#5E81AC"});
		$(gobutton).children().css({"color":"white"});
	}
}
