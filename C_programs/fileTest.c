#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */


main()
{
	
	long nc; 
	nc = 0; 
	
	while(getchar() != '\n')
		++nc;
	printf("%ld\n", nc);
}
