jQuery(document).ready(function(){


function iHaveBeenClicked(){
event.preventDefault();

var cityValue =$('#city-type').val();
cityValue = cityValue.toLowerCase().trim();

if(cityValue == "new york" || cityValue == "nyc" || cityValue == "new york city"){
$("body").attr('class', 'nyc');

}

if(cityValue == "san francisco" || cityValue == "sf" || cityValue == "bay area"){
$("body").attr('class', 'sf');

}

if(cityValue == "los angeles" || cityValue == "la" || cityValue == "lax"){
$("body").attr('class', 'la');

}

if(cityValue == "austin" || cityValue == "atx"){
$("body").attr('class', 'austin');

}

if(cityValue == "sydney" || cityValue == "syd"){
$("body").attr('class', 'sydney');


}

}
$('#submit-btn').click(iHaveBeenClicked);

});


