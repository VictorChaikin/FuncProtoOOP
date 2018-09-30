
"use strict";

function Animal(Age,Gender,MaxSpeed,NaturalInhebitat) { //////// Создаем базовый класс с 4 полями и основными функциями
    let age = Age;
    let gender = Gender;
    let maxSpeed = MaxSpeed;
    let naturalInhabitant = NaturalInhebitat;

    this.walk = function (){
        console.log("It is walking.");
    };

    this.eat = function (){
        console.log("It is eating.");
    };

    this.voice =function (){
        console.log("Animal is showing its voice.");
    };

    this.ShowInfo = function (){
        console.log("Age = "+ age);
        console.log("Gender = "+gender);
        console.log("MasSpeed = "+ maxSpeed);
        console.log("Natural = "+ naturalInhabitant);

    }

}


///////////////////  Vulture ////////////////////////////////

function Vulture(age,gender,maxSpeed,naturalInhebitat,MeatAmountPerWeek) {  /// Создаем класс который наследует Животное

    this._meatAmountPerWeek = MeatAmountPerWeek;                            ///   Объявляем новое поле
    Animal.apply(this,arguments);

    this.walk =function  () {                                                ////   Переопределяем некоторые методы в Животном
        console.log(" Vulture is walking. ")
    };
    let animalShowInfo=this.ShowInfo;                                       ////Создаем переменную которая ссылаеться на родительский метод

    this.ShowInfo = function(){
        animalShowInfo.apply(this,arguments);                                ///Вызываем родительский метод и дополняем его
        console.log("MeatAmountPerWeek = "+this._meatAmountPerWeek);
    };

    this.voice =function  (){
        console.log("Vulture is showing its voice.");
    };

    this.hunt =function  (){                                                     ///   Создаем новый метод
        console.log("Vulture is hunting .");
    }
}




////////////////////// Cats   ////////////////

function Cats(age,gender,maxSpeed,naturalInhebitat,MeatAmountPerWeek,Size) {   //// Создаем новый класс Кошачие
    this._size = Size;                                                         /// Создаем новое поле

    Vulture.apply(this,arguments);                                             /////Вызываем конструктор родителя

    this.walk =function  () {                                                 ////// Переопределяем ножные функции для даного класса
        console.log("Cats is walking");

    };

    this.hunt =function  () {
        console.log("Cats is hunting")
    };

    this.voice =function  () {
        console.log("Cats is roaring");
    };

    let vultureShowInfo=this.ShowInfo;                                          ///// Делаем то же Что в родительском классе только для данного

    this.ShowInfo = function  () {
        vultureShowInfo.apply(this,arguments);
        console.log(" Size : "+this._size.height+" "+this._size.weight+" "+this._size.length)
    }
}



////////////////// 	Artiodactyles  ////////////////////////////

function Artiodactyle(age,gender,maxSpeed,naturalInhebitat,GrasAmountPerWeek){   ////// Создаем новый класс Парнокопытные

    this._grasAmountPerWeek = GrasAmountPerWeek;                                //// Добовляем новое свойство
    Animal.apply(this,arguments);                                                ///Вызываем конструктор родителя

    this.walk = function  () {                                                    //////Переопределяем методы
        console.log(" Artiodactyle is walking. ")
    };
    let animalShowInfo=this.ShowInfo;                                           ////// Создаем переменную ссылающеюся на родительский метод

    this.ShowInfo = function  () {
        animalShowInfo.call(this,arguments);                                      ///// Вызываем родительский метод и дополняем его
        console.log("GrassAmountPerWeek = "+this._grasAmountPerWeek);

    };

    this.voice =function (){
        console.log("Artiodactyle is showing its voice.");
    };

    this.hide =function (){
        console.log("Artiodactyle is hiding from the vulture .");
    }

}



//////////////////// Antilop //////////////////////

function Antilop(age,gender,maxSpeed,naturalInhebitat,GrasAmountPerWeek,Size){   ////// Создаем новый класс Антилопы
    this._parametrs = Size;                                                      ////// Добовляем новое поле
    Artiodactyle.apply(this,arguments);                                          //// Вызываем конструктор родителя

    this.walk =function  () {                                                   ///////Переопределяем функции
        console.log(" Antilop is walking. ")
    };

    let artiShowInfo=this.ShowInfo;                                              ////// Делаем тоже что и у родителя но для данного класса
    this.ShowInfo =function () {
        artiShowInfo.apply(this,arguments);
        console.log(" Size : "+this._parametrs.height+" "+this._parametrs.weight+" "+this._parametrs.length+" "+this._parametrs.width);

    };

    this.voice =function  (){
        console.log("Antilop is showing its voice.");
    };

    this.hide =function (){
        console.log("Antilop is hiding from the vulture .");
    }

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