function changeColor(){
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  
  let color='rgb('+red+','+green+','+blue+')';
  
  var r_hex = parseInt(red, 10).toString(16),
      g_hex = parseInt(green, 10).toString(16),
      b_hex = parseInt(blue, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  document.body.style.backgroundColor = color;
  document.getElementById("rgbColor").innerHTML=color;
  document.getElementById("hexColor").innerHTML = hex;
  
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

document.getElementById("red").addEventListener("input", changeColor);
document.getElementById("green").addEventListener("input", changeColor);
document.getElementById("blue").addEventListener("input", changeColor);

