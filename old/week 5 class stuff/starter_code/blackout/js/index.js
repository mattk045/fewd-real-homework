var lights = 'on';

$('#light_switch').click(switchlights);



function switchlights(){
	if(lights == 'on'){
		$('body').addClass('dark');
		lights = 'off';
	}

	else {
		$('body').removeClass('dark');
		lights = 'on';

	}

}


