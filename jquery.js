jQuery(document).ready(function(){

$("#rel_main_popout1").hide()
$(".rel_main_readless_hide").hide()

function showMoreFirstPost(){
$("#rel_main_popout1").slideDown()
$(".rel_main_readless_hide").show()
$("#rel_main_1stpost_read_more").hide()
}

$("#rel_main_1stpost_read_more").click(showMoreFirstPost);

function showLessFirstPost(){
	   event.preventDefault();
$("#rel_main_popout1").slideUp()
$(".rel_main_readless_hide").hide()
$("#rel_main_1stpost_read_more").show()
}

$(".rel_main_readless_hide").click(showLessFirstPost);






function test(){
$(".rel_top_bar").css("background", "red")
}

$(".rel_top_title").click(test);

});

/**
function clickReadMore(){
this is the first one
}

$(".rel_main_post_read_more").click(clickReadMore);

function clickReadMore(){
this is the second one
}

$(".rel_main_post_read_more").click(clickReadMore);




function colorChange(){
	$("body").css("background-color", "white")

}

$("p").click(colorChange);













		function question1(){
		$("replaceMe").css("replaceMe", "replaceMe");
	}

	$("#button1").click(question1);

*/
/**
	function question2(){
	 	$("h2").html("Matthew J Kennedy");
	 }

	$("#button1").click(question2);
	*/

	/**function question3(){
		$(".falseFact").text("True Fact");
	 }

	 $("#button1").click(question3);
	 ;

	 */

	/**function question4(){
		$("body").css('background-color','pink')
}
	$("button2").click(question4); */

	/**function question7(){
		$("h1").text("jQuery Ninja");
	 }

	 $("#button3").click(question7);
	 */
