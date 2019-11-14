function Mouse(name){
	this.name=name;
}
Mouse.prototype.eat=function(){
	console.log('bị ăn');
}
var Jerry = new Mouse('Jerry');
Jerry.eat();
console.log(Jerry);
module.exports=Mouse;