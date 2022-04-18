document.getElementById("tra1").onclick = function() {
    document.getElementById("tra1").classList.add("tra1");
    document.getElementById("tra1-1").style.color = "#555";
    document.body.style.background = "lightblue";
    setTimeout(function() {
        document.getElementById("tra2-1").style.opacity = "1";
        document.getElementById("tra2-1").style.top = "50%";
        document.getElementById("tra2").style.display = "block";
    }, 2000);
}
document.getElementById("tra2-3").onclick = function() {
    if(document.getElementById("tra2-2").value !== "") {
        document.getElementById("tra2-3").style.background = "#90EE90";
        document.getElementById("tra2-3").style.color = "black";
        document.getElementById("tra2-1").style.display = "none";
        setTimeout(function() {
            document.getElementById("tra2").style.opacity = "0";
            setTimeout(function() {
                document.getElementById("tra2").style.display = "none";
                setTimeout(function() {
                    transition_2_part_2();
                }, 50);
            }, 1000);
        }, 500);
    }
}
function transition_2_part_2() {
    document.getElementById("tra3").style.left = "5%";
    document.body.style.background = "pink";
    setTimeout(function(){
        document.getElementById("tra3html_b").style.opacity = "1";
    }, 1500);
}
document.getElementById("tra3html_b").onclick = function() {
    document.getElementById("tra3html_p").style.display = "block";
    setTimeout(function(){
            document.getElementById("tra3css_b").style.opacity = "1";
        }, 1500);
}
document.getElementById("tra3css_b").onclick = function() {
    document.getElementById("tra3css_p2").style.color = "black";
    document.getElementById("tra3css_p2").classList.remove("noselect");
    setTimeout(function(){
        document.getElementById("tra3js_b").style.opacity = "1";
    }, 2000);
}
