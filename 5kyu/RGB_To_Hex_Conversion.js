/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
   function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
   }

   function checkNum(num) {
      if (num > 255) return 255;
      else if (num < 0) return 0;
      else return num;
   }

   function rgbToHex(r, g, b) {
      let newR = checkNum(r);
      let newG = checkNum(g);
      let newB = checkNum(b);
      return componentToHex(newR).toUpperCase() + componentToHex(newG).toUpperCase() + componentToHex(newB).toUpperCase();
   }

   return rgbToHex(r, g, b);
}

rgb(173, 255, 47)