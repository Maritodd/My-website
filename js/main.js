// let resizeReset = function() {
// 	w = canvasBody.width = window.innerWidth;
// 	h = canvasBody.height = window.innerHeight;
// }

// const opts = { 
// 	particleColor: "rgb(200,200,200)",
// 	lineColor: "rgb(200,200,200)",
// 	particleAmount: 40,
// 	defaultSpeed: 0.1,
// 	variantSpeed: 1,
// 	defaultRadius: 2,
// 	variantRadius: 2,
// 	linkRadius: 175,
// };


// window.addEventListener("resize", function(){
// 	deBouncer();
// });

// let deBouncer = function() {
// 	clearTimeout(tid);
// 	tid = setTimeout(function() {
// 		resizeReset();
// 	}, delay);
// };

// let checkDistance = function(x1, y1, x2, y2){ 
// 	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// };

// let linkPoints = function(point1, hubs){ 
// 	for (let i = 0; i < hubs.length; i++) {
// 		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
// 		let opacity = 1 - distance / opts.linkRadius;
// 		if (opacity > 0) { 
// 			drawArea.lineWidth = 0.5;
// 			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
// 			drawArea.beginPath();
// 			drawArea.moveTo(point1.x, point1.y);
// 			drawArea.lineTo(hubs[i].x, hubs[i].y);
// 			drawArea.closePath();
// 			drawArea.stroke();
// 		}
// 	}
// }

// Particle = function(xPos, yPos){ 
// 	this.x = Math.random() * w; 
// 	this.y = Math.random() * h;
// 	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
// 	this.directionAngle = Math.floor(Math.random() * 360); 
// 	this.color = opts.particleColor;
// 	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
// 	this.vector = {
// 		x: Math.cos(this.directionAngle) * this.speed,
// 		y: Math.sin(this.directionAngle) * this.speed
// 	};
// 	this.update = function(){ 
// 		this.border(); 
// 		this.x += this.vector.x; 
// 		this.y += this.vector.y; 
// 	};
// 	this.border = function(){ 
// 		if (this.x >= w || this.x <= 0) { 
// 			this.vector.x *= -1;
// 		}
// 		if (this.y >= h || this.y <= 0) {
// 			this.vector.y *= -1;
// 		}
// 		if (this.x > w) this.x = w;
// 		if (this.y > h) this.y = h;
// 		if (this.x < 0) this.x = 0;
// 		if (this.y < 0) this.y = 0;	
// 	};
// 	this.draw = function(){ 
// 		drawArea.beginPath();
// 		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
// 		drawArea.closePath();
// 		drawArea.fillStyle = this.color;
// 		drawArea.fill();
// 	};
// };

// function setup(){ 
// 	particles = [];
// 	resizeReset();
// 	for (let i = 0; i < opts.particleAmount; i++){
// 		particles.push( new Particle() );
// 	}
// 	window.requestAnimationFrame(loop);
// }

// function loop(){ 
// 	window.requestAnimationFrame(loop);
// 	drawArea.clearRect(0,0,w,h);
// 	for (let i = 0; i < particles.length; i++){
// 		particles[i].update();
// 		particles[i].draw();
// 	}
// 	for (let i = 0; i < particles.length; i++){
// 		linkPoints(particles[i], particles);
// 	}
// }

// const canvasBody = document.getElementById("canvas"),
// drawArea = canvasBody.getContext("2d");
// let delay = 200, tid,
// rgb = opts.lineColor.match(/\d+/g);
// resizeReset();
// setup();

// if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
// 	let resizeReset = function() {
// 		w = canvasBody.width = window.innerWidth;
// 		h = canvasBody.height = window.innerHeight;
// 	}
	
// 	const opts = { 
// 		particleColor: "rgb(200,200,200)",
// 		lineColor: "rgb(200,200,200)",
// 		particleAmount: 25,
// 		defaultSpeed: 0.10,
// 		variantSpeed: 1,
// 		defaultRadius: 2,
// 		variantRadius: 2,
// 		linkRadius: 175,
// 	};
	
	
// 	window.addEventListener("resize", function(){
// 		deBouncer();
// 	});
	
// 	let deBouncer = function() {
// 		clearTimeout(tid);
// 		tid = setTimeout(function() {
// 			resizeReset();
// 		}, delay);
// 	};
	
// 	let checkDistance = function(x1, y1, x2, y2){ 
// 		return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// 	};
	
// 	let linkPoints = function(point1, hubs){ 
// 		for (let i = 0; i < hubs.length; i++) {
// 			let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
// 			let opacity = 1 - distance / opts.linkRadius;
// 			if (opacity > 0) { 
// 				drawArea.lineWidth = 0.5;
// 				drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
// 				drawArea.beginPath();
// 				drawArea.moveTo(point1.x, point1.y);
// 				drawArea.lineTo(hubs[i].x, hubs[i].y);
// 				drawArea.closePath();
// 				drawArea.stroke();
// 			}
// 		}
// 	}
	
// 	Particle = function(xPos, yPos){ 
// 		this.x = Math.random() * w; 
// 		this.y = Math.random() * h;
// 		this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
// 		this.directionAngle = Math.floor(Math.random() * 360); 
// 		this.color = opts.particleColor;
// 		this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
// 		this.vector = {
// 			x: Math.cos(this.directionAngle) * this.speed,
// 			y: Math.sin(this.directionAngle) * this.speed
// 		};
// 		this.update = function(){ 
// 			this.border(); 
// 			this.x += this.vector.x; 
// 			this.y += this.vector.y; 
// 		};
// 		this.border = function(){ 
// 			if (this.x >= w || this.x <= 0) { 
// 				this.vector.x *= -1;
// 			}
// 			if (this.y >= h || this.y <= 0) {
// 				this.vector.y *= -1;
// 			}
// 			if (this.x > w) this.x = w;
// 			if (this.y > h) this.y = h;
// 			if (this.x < 0) this.x = 0;
// 			if (this.y < 0) this.y = 0;	
// 		};
// 		this.draw = function(){ 
// 			drawArea.beginPath();
// 			drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
// 			drawArea.closePath();
// 			drawArea.fillStyle = this.color;
// 			drawArea.fill();
// 		};
// 	};
	
// 	function setup(){ 
// 		particles = [];
// 		resizeReset();
// 		for (let i = 0; i < opts.particleAmount; i++){
// 			particles.push( new Particle() );
// 		}
// 		window.requestAnimationFrame(loop);
// 	}
	
// 	function loop(){ 
// 		window.requestAnimationFrame(loop);
// 		drawArea.clearRect(0,0,w,h);
// 		for (let i = 0; i < particles.length; i++){
// 			particles[i].update();
// 			particles[i].draw();
// 		}
// 		for (let i = 0; i < particles.length; i++){
// 			linkPoints(particles[i], particles);
// 		}
// 	}
	
// 	const canvasBody = document.getElementById("canvas"),
// 	drawArea = canvasBody.getContext("2d");
// 	let delay = 200, tid,
// 	rgb = opts.lineColor.match(/\d+/g);
// 	resizeReset();
// 	setup();
// }
var cvs = document.createElement('canvas'),
    context = cvs.getContext("2d");
document.body.appendChild(cvs);

var numDots = 100,
    n = numDots,
    currDot,
    maxRad = 300,
    minRad = 100,
    radDiff = maxRad-minRad,
    dots = [],
    pairs = [];
    PI = Math.PI,
    centerPt = {x:0, y:0};

resizeHandler();
window.onresize = resizeHandler;

// create dots
n = numDots
while(n--){
  currDot = {};
  currDot.x = currDot.y = 0;
  currDot.radius = minRad+Math.random()*radDiff;
  currDot.radiusV = 10+Math.random()*50,
  currDot.radiusVS = (1-Math.random()*2)*0.015,
  currDot.radiusVP = Math.random()*PI,
  currDot.ang = (1-Math.random()*2)*PI;
  currDot.speed = (1-Math.random()*2);
  //currDot.speed = 1-Math.round(Math.random())*2;
  //currDot.speed = 1;
  currDot.intensity = Math.round(Math.random()*255);
  currDot.fillColor = "rgb("+currDot.intensity+","+currDot.intensity+","+currDot.intensity+")";
  dots.push(currDot);
}

//create all pairs

n = numDots
while(n--){
  ni = n;
  while(ni--){
    pairs.push([n, ni]);
  }
}

function drawPoints(){
  n = numDots;
  var _centerPt = centerPt,
      _context = context,
      dX = 0,
      dY = 0;
  
  _context.clearRect(0, 0, cvs.width, cvs.height);
  
  var radDiff;
  //move dots
  n = numDots;
  while(n--){
    currDot = dots[n];
    currDot.radiusVP += currDot.radiusVS;
    radDiff = currDot.radius+Math.sin(currDot.radiusVP)*currDot.radiusV;
    currDot.x = _centerPt.x+Math.sin(currDot.ang)*radDiff;
    currDot.y = _centerPt.y+Math.cos(currDot.ang)*radDiff;
    
    //currDot.ang += currDot.speed;
    currDot.ang += currDot.speed*radDiff/20000;
    
  } 
  
  var pair, dot0, dot1, dist, bright,
      maxDist = Math.pow(100, 2);
  //draw lines
  n = pairs.length;
  while(n--){
    pair = pairs[n];
    dot0 = dots[pair[0]];
    dot1 = dots[pair[1]];
    dist = Math.pow((dot1.x-dot0.x), 2)+Math.pow((dot1.y-dot0.y), 2);
    if(dist<maxDist){
      bright = Math.round(50*(maxDist-dist)/maxDist);
      _context.beginPath();
      _context.moveTo(dot0.x, dot0.y);
      _context.lineTo(dot1.x, dot1.y);
      _context.lineWidth = 1;
      _context.strokeStyle = "rgb("+bright+","+bright+","+bright+")";
      _context.stroke();
    }
  }
  
  //draw dots
  n = numDots;
  while(n--){    
    //console.log(currDot);
    _context.fillStyle= dots[n].fillColor;
    _context.fillRect(dots[n].x, dots[n].y, 1, 1);
  }
  window.requestAnimationFrame(drawPoints);
}

function resizeHandler(){
  var box = cvs.getBoundingClientRect();
  var w = box.width;
  var h = box.height;
  cvs.width = w;
  cvs.height = h;
  centerPt.x = Math.round(w/2);
  centerPt.y = Math.round(h/2);
}

drawPoints();