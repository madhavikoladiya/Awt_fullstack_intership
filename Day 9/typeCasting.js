//let myvar;
//myvar =44;
//myvar =String(44);
//document.write(myvar," ",typeof(myvar));


//let d = new String(Date());
//console.log(d,typeof d);

//let arr = [1,2,3,4,5,6,7,8,9,10];
//console.write(arr,typeof arr);

//number() to string
document.write("<br/>"+Number("5.233088"));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number("5.sckd"));
document.write("<br/>")



let numexp = 3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));
document.write("<br/>")


let numfixed = 3.14;
document.write("<br/>"+numexp.toFixed());
document.write("<br/>"+numexp.toFixed(2));
document.write("<br/>"+numexp.toFixed(4));
document.write("<br/>"+numexp.toFixed(6));
document.write("<br/>")

let numprec = 3.14;
document.write("<br/>"+numexp.toPrecision());
document.write("<br/>"+numexp.toPrecision(2));
document.write("<br/>"+numexp.toPrecision(4));
document.write("<br/>"+numexp.toPrecision(6));
document.write("<br/>")


let val = 3.14;
document.write("<br/>",val.valueOf());
val =3.200
document.write("<br/>",val);



//max number 
document.write("<br/>"+Number.MAX_VALUE_value);
document.write("<br/>")

//min number
document.write("<br/>"+Number.MIN_VALUEvalue);
document.write("<br/>")

//1/0
document.write("<br/>"+Number.POSITIVE_INFINITY);
document.write("<br/>")


//-1/0
document.write("<br/>"+Number.NEGATIVE_INFINITY);
document.write("<br/>")

//parseint
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("year is :10"));
document.write("<br/>")

//parse flot
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("year is :10"));


//date-year,month,day,hour,minute,second,milisecond
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1987-07-34"));
document.write("<br/>"+new Date(2014,23,12,24,11,30));
document.write("<br/>"+new Date("june 24,2023 11:34PM"));
document.write("<br/>")


var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.tUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());
document.write("<br/>")

document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());


