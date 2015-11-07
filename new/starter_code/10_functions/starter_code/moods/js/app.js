//wait for the DOM elements to load before executing
$(document).ready(function() {

  // Create a function that runs whenever the submit button is clicked

function iHaveBeenClicked(){
event.preventDefault();

var moodValue = $('#mood').val();
moodValue = moodValue.toLowerCase().trim();

if(moodValue == "ecstatic" || moodValue == "excited" || moodValue == "fantastic"){


$(".moodring div").attr('class', 'excited');
}


if(moodValue == "happy" || moodValue == "good" || moodValue == "great"){
$(".moodring div").attr('class', 'happy');
}

if(moodValue == "bad" || moodValue == "angry"){
$(".moodring div").attr('class', 'bad');
}


}




$('#submit-btn').click(iHaveBeenClicked);




    //prevent the submit button from refreshing the page

    //get the value of the #mood input and correct for capitalization

    // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'

    // if the user inputs happy/good/great change the CSS class to 'happy'

    // if the user inputs bad/angry change the CSS class to 'bad'


});