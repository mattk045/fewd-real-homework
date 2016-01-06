#include <stdio.h>
#include <stdlib.h>

main()

{
	float fahr, celsius; 
	int lower, upper, step;
	
	lower = 0;
	upper = 300;
	step = 20;
	
	celsius = upper; 
	
	printf("  C      F         \n");
	printf("       \n");

	
	while (celsius >= lower){
	
		fahr=(celsius * 1.8) + 32;
		
		
		printf("%3.0f %6.1f\n", celsius, fahr);
		celsius = celsius - step;
		
	}
}
