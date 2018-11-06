var c = document.getElementById( "home" );
var ctx = c.getContext("2d");
// Fond
ctx.beginPath();
ctx.moveTo(140,140);
ctx.lineTo(140,320);
ctx.lineTo(280,320);
ctx.lineTo(280,140);
ctx.closePath();
ctx.fillStyle = "#A9D7E6";
ctx.fill();

// rectangle
ctx.beginPath();
ctx.moveTo(190,320);
ctx.lineTo(190,260);
ctx.lineTo(230,260);
ctx.lineTo(230,320);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

// carré
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(150,200);
ctx.lineTo(200,200);
ctx.lineTo(200,150);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

ctx.beginPath();
ctx.moveTo(210,150);
ctx.lineTo(210,200);
ctx.lineTo(260,200);
ctx.lineTo(260,150);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

// triangle
ctx.beginPath();
ctx.moveTo(280,140);
ctx.lineTo(210,50);
ctx.lineTo(140,140);
ctx.closePath();
ctx.fillStyle = "#CE8539";
ctx.fill();
