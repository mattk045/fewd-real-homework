jQuery(document).ready(function(){


function iHaveBeenClicked(){
event.preventDefault();

var cityValue =$('#city-type').val();
cityValue = cityValue.toLowerCase().trim();

if(cityValue == "new york" || cityValue == "nyc" || cityValue == "new york city"){
$("body").attr('class', 'nyc');
document.getElementById("test").reset();
}

if(cityValue == "san francisco" || cityValue == "sf" || cityValue == "bay area"){
$("body").attr('class', 'sf');
document.getElementById("test").reset();
}

if(cityValue == "los angeles" || cityValue == "la" || cityValue == "lax"){
$("body").attr('class', 'la');
document.getElementById("test").reset();
}

if(cityValue == "austin" || cityValue == "atx"){
$("body").attr('class', 'austin');
document.getElementById("test").reset();
}

if(cityValue == "sydney" || cityValue == "syd"){
$("body").attr('class', 'sydney');
document.getElementById("test").reset();

}

}
$('#submit-btn').click(iHaveBeenClicked);

});


