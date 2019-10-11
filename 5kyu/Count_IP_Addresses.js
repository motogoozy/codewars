/*

Write a function that accepts a starting and ending IPv4 address, and the number of IP addresses from start to end, excluding the end IP address.

All input to the function will be valid IPv4 addresses in the form of strings. The ending address will be at least one address higher than the starting address.

Examples
ips_between("10.0.0.0", "10.0.0.50")  =>   50 
ips_between("10.0.0.0", "10.0.1.0")   =>  256 
ips_between("20.0.0.10", "20.0.1.0")  =>  246

*/

function ipsBetween(start, end) {
   let startingInts = start.split('.').map((addr) => {
      return parseInt(addr);
   });
   let endingInts = end.split('.').map((addr) => {
      return parseInt(addr);
   });
   let totalIps = 0;
   let multipliers = [256 * 256 * 256, 256 * 256, 256, 1];
   for (let i = 0; i < 4; i++) {
      totalIps = totalIps + (endingInts[i] - startingInts[i]) * multipliers[i];
   }
   return totalIps;
}

ipsBetween("20.0.0.10", "20.0.1.0")