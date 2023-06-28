//do whhile
let j = 0;
do{
    document.write("<br/>"+j);
    j++;
}while(j<=10);
        document.write("<hr/>")

//while
let i = 0;
while(i<=5){
    document.write("<br/>",i);
    i++
}
document.write("<hr/>")


//for
for(i=0;i<5;i++){
    document.write("<br/>",i)
}
document.write("<hr/>")

// for in
const person = {fname:"madhvi",lname:"koladiya",age:19};
for(let p in person){
    document.write("<br/>"+p);
 }
        document.write("<br/>")
 for(let p in person){
    document.write("<br/>"+person[p]);
 }
 document.write("<hr/>")
 //for off
 const cars = ["bmw","volvo","creta"];
 for(let x of cars){
    document.write("<br/>"+x)
 }