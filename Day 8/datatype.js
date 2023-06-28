//object
var obj = new Object();
document.write("<br/>"+typeof(obj));
  
document.write("<br/>"+obj.firtsname+" "+obj.lastname);

//create a user define object

var car={
    modal: "bmw",
    color: "white",
    doors: 5,
}
document.write("<br>"+car.modal+" "+car.color+" "+car.doors);

//array datatype
var cars=["bmw","skoda","creta"];
document.write("<br/>"+cars[0]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[2]);
document.write("<br/>"+cars[3]);

//function datatype

var demo = function(){
    return "hello welcome to javascript!";
}
document.write("<br/>"+typeof(demo));
document.write("<br/>"+demo());