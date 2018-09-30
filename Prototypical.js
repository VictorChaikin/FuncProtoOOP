
"use strict";

function Animal(Age,Gender,MaxSpeed,NaturalInhebitat) {////// Основной клас с 4 полями и 4 методами
    this._age = Age;
    this._gender = Gender;
    this._maxSpeed = MaxSpeed;
    this._naturalInhebitat = NaturalInhebitat;
}

Animal.prototype.walk = function(){
    console.log("It is walking.");
}

Animal.prototype.eat = function (){
    console.log("It is eating.");
}

Animal.prototype.voice = function(){
    console.log("Animal is showing its voice.");
}

Animal.prototype.ShowInfo = function(){
    console.log("Age = "+ this._age);
    console.log("Gender = "+ this._gender);
    console.log("MasSpeed = "+ this._maxSpeed);
    console.log("Natural = "+ this._naturalInhebitat);

}

///////////////////  Vulture ////////////////////////////////

function Vulture(age,gender,maxSpeed,naturalInhebitat,MeatAmountPerWeek) { //// Класс наследующийся от Animal

    this._meatAmountPerWeek = MeatAmountPerWeek;
    Animal.apply(this,arguments);                          //////Вызывает конструктор Родителя чтобы им воспользоваться
}

Vulture.prototype = Object.create(Animal.prototype);       /////Наследуем Хищьника от Животного

Vulture.prototype.walk = function () {
    console.log(" Vulture is walking. ")
}                 ////Переопределяем функции под Хищьника

Vulture.prototype.ShowInfo = function () {

    Animal.prototype.ShowInfo.apply(this);                 ///// Вызываем родительский метод и дополняем его
    console.log("FoodAmountPerWeek = "+this._meatAmountPerWeek)

}

Vulture.prototype.voice = function(){
    console.log("Vulture is showing its voice.");
}

Vulture.prototype.hunt = function(){
    console.dir("Vulture is hunting .");
}

////////////////////// Cats   ////////////////

function Cats(age,gender,maxSpeed,naturalInhebitat,MeatAmountPerWeek,Size) {
    this._size = Size;

    Vulture.apply(this,arguments);
} /////Создаем новый класс Кощачие который наследуеться от Хищьника

Cats.prototype = Object.create(Vulture.prototype);                           //////////Неопсредственно наследование

Cats.prototype.walk = function () {
    console.log("Cats is walking");

}                                       ////////////Переопределение функций

Cats.prototype.hunt = function () {
    console.log("Cats is hunting")
}

Cats.prototype.voice = function () {
    console.log("Cats is roaring");
}

Cats.prototype.ShowInfo = function () {
    Vulture.prototype.ShowInfo.apply(this,arguments);                                       ///////////Вызов метода родителя с дополнениями
    console.log(" Size : "+this._size.height+" "+this._size.weight+" "+this._size.length)
}
////////////////// 	Artiodactyles  ////////////////////////////

function Artiodactyle(age,gender,maxSpeed,naturalInhebitat,GrasAmountPerWeek){

    this._grasAmountPerWeek = GrasAmountPerWeek;
    Animal.apply(this,arguments);
}    /////////// Создаем класс Парнокопытные который наследуеться
                                                                                            ////////от Животного

Artiodactyle.prototype = Object.create(Animal.prototype);                       /////////////////Устанавливаем наследственность

Artiodactyle.prototype.walk = function () {
    console.log(" Artiodactyle is walking. ")
}

Artiodactyle.prototype.ShowInfo = function () {

    Animal.prototype.ShowInfo.apply(this);
    console.log("GrassAmountPerWeek = "+this._grasAmountPerWeek);

}                            ////////////////Переопределяем функции

Artiodactyle.prototype.voice = function(){
    console.log("Artiodactyle is showing its voice.");
}

Artiodactyle.prototype.hide = function(){
    console.log("Artiodactyle is hiding from the vulture .");
}

//////////////////// Antilop //////////////////////

function Antilop(age,gender,maxSpeed,naturalInhebitat,GrasAmountPerWeek,Size){
    this._parametrs = Size;
    Artiodactyle.apply(this,arguments);
}  ////////Создаем класс Антилопы с доп полем Размер

Antilop.prototype = Object.create(Artiodactyle.prototype);                        ////////Устанавливаем наследственность он Парнопопытных

Antilop.prototype.walk = function () {
    console.log(" Antilop is walking. ")
}                                         ////////Переопределяем функции

Antilop.prototype.ShowInfo = function () {

    Artiodactyle.prototype.ShowInfo.apply(this);
    console.log(" Size : "+this._parametrs.height+" "+this._parametrs.weight+" "+this._parametrs.length+" "+this._parametrs.width);

}

Antilop.prototype.voice = function(){
    console.log("Antilop is showing its voice.");
}

Antilop.prototype.hide = function(){
    console.log("Antilop is hiding from the vulture .");
}

////////////////////////// Tests /////////////////////////////////////   Тестируем екземпляры разных классов на првельное переопределение методов
console.log("Vulture");                                             ///////И что от кого наследует
let vult = new Vulture(1,"male",20,"Ukraine",15);
console.log("ShowInfo");
vult.ShowInfo();
vult.eat();
console.log()
console.dir(vult);
console.log(vult.hasOwnProperty("_meatAmountPerWeek"));
console.log(" ");

console.log("Artiodactyle");
let arti = new Artiodactyle(2,"female",45,"Africa",15);
arti.ShowInfo();
arti.voice();
arti.hide();
arti.walk();
console.dir(arti);
console.log(" ");

console.log("Cat  ");
console.log(" ");
let cat = new Cats(3,"male", 15,"Ukraine",2,{height: 25,weight : 5,length :40});
cat.hunt();
cat.voice();
cat.walk();
cat.ShowInfo();
cat.eat();
console.dir(cat);

console.log(" ");
console.log("Antilop  ");
console.log(" ");
let antilop = new Antilop(4,"female",45,"India",14,{height: 140, weight: 40, length: 150, width:40});
antilop.hide();
antilop.ShowInfo();
antilop.voice();
antilop.walk();
antilop.eat();
console.dir(antilop);