#include <stdio.h>
#include <stdlib.h>


	/*this kind of thing is going to count tabs, blank spaces, and new lines in an input setting or in a file */
	
main()
{
	int x, t, b, n;
	
	n = 0; 
	t = 0; 
	b = 0;



while (x = getchar() != '*')

	
	
		if (x == 'a')
		++n;


		printf("%d\n", n);
	
}

/*
{
	
	while ((x = getchar()) != '*')
	
		if (x == '/n');
		++n;
		
	while ((x = getchar()) != '*')
		if (x == '/t');
		++t;
	
	while ((x = getchar()) != '*')	
		if (x == ' ');
		++b;
}
		
	printf("%d\n", n);
	printf("%d\n", t);
	printf("%d\n", b);	
	
	
	
}
*/
