

jQuery( document ).ready(function() {


var Candy = 0;



$(window).resize(function(){     

  if ($('header').width() > 810 ){

     $('.site-header').css("background-color", "pink")

    $('.horizontal-nav li').css('display', 'inline-block')

Candy = 0;

     }
});




$(window).resize(function(){     

  if (Candy == 0 && $('header').width() < 869){

$('.horizontal-nav li').css('display', 'block')
$('.horizontal-nav li').css('text-align', 'center')
$('.horizontal-nav li').hide()
$('.site-header').css("background-color", "red")

Candy = 1;
  }
});


$(window).resize(function(){     

  if (Candy == 1 && $('header').width() < 869){

//$('.horizontal-nav li').css('display', 'block')
//$('.horizontal-nav li').css('text-align', 'center')



Candy = 1;
  }

});



function iHaveBeenClicked(){

$('.mobileHide li').toggle();

}


$('.hamburger').click(iHaveBeenClicked);



});
