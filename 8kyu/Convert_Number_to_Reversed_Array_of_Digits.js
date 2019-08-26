/*Convert number to reversed array of digits

Given a random number:
You have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]*/

var num = 348597;

function digitize(n) {
//Write a function that:
	//converts n to string 
	//splits it into an array
	//reverses the order
	//converts each element into integer
	return n.toString()
	.split("")
	.reverse()
	.map((x)=> Number(x));
}

digitize(num);