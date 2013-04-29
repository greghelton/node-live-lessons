function Shape() {}

Shape.prototype.X = 0;
Shape.prototype.Y = 0;
Shape.prototype.move = function(x, y) {
	this.X = x;
	this.Y = y;
}

Shape.prototype.distance_from_origin = function() {
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

Shape.prototype.area = function() {
	0;
}

function Square() {}
Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width = 0;
Square.prototype.area = function() {
	return this.Width * this.Width;
}

var s = new Shape();
s.move(10, 12);
console.log("1. " + s.distance_from_origin()); 
s.move(1, 1);
console.log("2. " + s.distance_from_origin());

var sq = new Square();
sq.move(5, 5);
console.log("3. " + sq.distance_from_origin());
sq.Width = 3;
console.log("4. " + sq.area());