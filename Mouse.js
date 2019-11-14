function Mouse(name){
	this.name=name;
	this.dead=false;
}
Mouse.prototype.die=function(){
	this.deaed=true;
}
var Jerry = new Mouse('Jerry');
console.log(Jerry);
module.exports=Mouse;