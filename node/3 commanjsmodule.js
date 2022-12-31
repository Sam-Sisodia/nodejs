//class basic

//we import circle.js here 



const mm= require("./circle");   // without distucture
mm.area()



const {area} = require("./circle");   // with distucture
area()



const {circumfrance} =require ("./3circle");
circumfrance(4)


//calling the class module 


const EMP =require("./circle");
const jj = new EMP()
jj.fuc2()



 












