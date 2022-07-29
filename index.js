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
		helpslide("#list1hover", "#list1hover2", "#list1", "#list1txt", "#list1txt2");
	});
	$("#list2hover").click(function() {
		helptype("#list2txt");
	});
})

function helpslide(helpbutton, gobutton, bar, origmsg, newmsg) {
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

function helptype(textbox) {
	if ($(textbox).text() == "cgisf.") {
		deleteString($(textbox), "|", 100,
			function() {
				typeString($(textbox), "A random sentence generator, ported to Javascript.", "|", 50);
			}
		);	
	}
	else if ($(textbox).text() == "A random sentence generator, ported to Javascript.") {
		deleteString($(textbox), "|", 50,
			function() {
				typeString($(textbox), "cgisf.", "|", 100);
			}
		);	
	}
}
function typeString($target, str, cursor, delay) {
	let fixedtext = $target.text();
	console.log(fixedtext);
	if (fixedtext.endsWith(cursor)) {
		fixedtext = fixedtext.slice(0, -1);
	}
	let string = fixedtext + str.charAt(fixedtext.length) + cursor;
	$target.text(string);

	if ($target.text().length < str.length + 1) {
		setTimeout(function() {
			typeString($target, str, cursor, delay);
		}, delay);
	}
	else {
		$target.text(string.slice(0, -1));
	}
}
function deleteString($target, cursor, delay, cb) {
	let fixedtext = $target.text();
    console.log(fixedtext);
 	if (fixedtext.endsWith(cursor)) {
		fixedtext = fixedtext.slice(0, -1);
    }
	fixedtext = fixedtext.slice(0, -1) + cursor;
	$target.text(fixedtext);

	if ($target.text().length > 1) {
		setTimeout(function() {
			deleteString($target, cursor, delay, cb);
	  	}, delay);
	} else {
	  	cb();
	}
}
