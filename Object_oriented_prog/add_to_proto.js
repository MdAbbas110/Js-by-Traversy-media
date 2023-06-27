function Rectangle(name, width, height) {
    this.name = name,
    this.width = width,
    this.height = height    
}
Rectangle.prototype.area = function () {
    return this.width * this.height
}

Rectangle.prototype.isPrime = function () {
    return 2 * (this.width + this.height)
}

Rectangle.prototype.NewName = function(NewName) {
    return this.name = NewName
}

const rect = new Rectangle('rect', 110,786)
console.log(rect.area());
console.log(rect);

const rect2 = new Rectangle('zameen', 34, 98)
console.log(rect2.area());
//* so as we knw that calculating area is gonna be the same method what we can do is put that method into our constructor prototype
//to do so we need ot pass the Const function name and.prototype.funNm

console.log(rect2.isPrime());
console.log(rect2.NewName('Jaydat'));
console.log(rect2.name);