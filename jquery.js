jQuery(document).ready(function(){

$("#rel_main_popout1").hide()
$(".rel_main_readless_hide").hide()
$("#rel_sidebar_popout").hide()
$("#rel_sidebar_read_less").hide()

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

function showMoreSidebar(){
$("#rel_sidebar_popout").slideDown()
$("#rel_sidebar_read_less").show()
$("#rel_sidebar_read_more").hide()
}

$("#rel_sidebar_read_more").click(showMoreSidebar);

function showLessSidebar(){
$("#rel_sidebar_popout").slideUp()
$("#rel_sidebar_read_less").hide()
$("#rel_sidebar_read_more").show()
}

$("#rel_sidebar_read_less").click(showLessSidebar);




});
