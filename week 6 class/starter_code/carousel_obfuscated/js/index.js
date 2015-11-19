// create variable/array

var images = ["images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg"];

var i = 0;

$(document).ready(function(){
//listen for click events

$("#buttons-wrapper .btn[value='Skip']").on("click", nextImage);
$("#buttons-wrapper .btn[value='Back']").on("click", previousImage);
});

//go to previous image

function previousImage() {
//if the index is greater than zero, change image/increment through and stop at 0
	if (i>0) {
		i = i-1;
}
		//changeImage(--i):0;
	
$("#image-to-vote-on").attr("src", images[i]);
}
	//i > 0 ? changeImage(--i):0;
function nextImage() {
//if the index is greater than zero, change image/increment through and stop at 0
	if (i<images.length-1) {
		i = i+1;

		//changeImage(--i):0;
}
	
$("#image-to-vote-on").attr("src", images[i]);
}
	//i > 0 ? changeImage(--i):0;







//function changeImage() {
	//$("#image-to-vote-on").attr("src", images[i]);
	//$("#your-vote>option").prop("selected", false);





//go to next image

//