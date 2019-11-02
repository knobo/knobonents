
export let colors =  [
		"rgba(239, 71, 111, 1)",
    "rgba(255, 209, 102, 1)",
    "rgba(5, 176, 131, 1)",
    "rgba(17, 138, 178, 1)",
    "rgba(7, 59, 76, 1)"
	];

//Function to convert hex format to a rgb color
export function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

export function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
	
export const AdjustLumin = (el) => {
		const bgcolor = window.getComputedStyle(el, null).getPropertyValue("background-color");
		const color = rgb2hex(bgcolor);
		const fgcolor = invertColor(color, true)
	  el.style.color = fgcolor;	
		return {
	   update: () => {
		   const bgcolor = window.getComputedStyle(el, null).getPropertyValue("background-color");
			 const color = rgb2hex(bgcolor);
		   const fgcolor = invertColor(color, true)
       el.style.color = fgcolor;	
	   }
   }
	}

