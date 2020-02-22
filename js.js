 /*
var - is globaly scoped 
let -has a block scope 
const - cant be reassighn 
//////////////////////
datatype :-
-premitive :- directoly assigned to a memory 
1:string , null , num , symbole ,boolean 

==========
string 
substring - (start ,end ) ----suuuubbbb
split("") returns array
=========================
arrray = variable that holds multiple value 
===========================
pop = remove last 
push - remove last
array.isarray(g)---return true or false 
============================================
shift- remove from the begging 
unshift - ass to the begining 



 */
 
 
 
 
 let aa = [1,2,3,4,5,6,7,8,9]





//while loo
//for loop 1:var assignment 2:condition 3:increment or decrement  same goes for for loop 
// for(let i =0 ;i<condition.length ;i++)
let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}
// for of loop 
for(let a of aa){
    console.log(a)
}

 //for each //creats a function 
 aa.forEach(element => {
     console.log(element)
});

 //map allow as to creat a newa array from an array 

 let newarray = aa.map(todo=>{
     return todo += 4
 })
console.log(newarray)


 //filter  allow as to crea an array based on a condition  
 let newarray1 = aa.filter(todo=>{
    return todo >6
})
console.log(newarray1)


//conditionals 

const xy = 10 
y=0;
 if(xy===10 || y<6){// multiple condition 
     console.log( "x ix 10")
 }
 else if(xy>10){
   console.log("greater than ten ")
 }
 else {
     console.log("not 10")
 }

 // terrnari operator 
 const xv =10;
 const color = xv>10 ? "red" :"blue"
 console.log(color )


 //switch (case) 

 switch(color){
     case "red":
         console.log("red")
         break;
         case "blue":
             console.log("blue")
             break;
default:
    console.log("color is not defined ")


 }
 

 //function 

 function addnum(nu1=1 , nu2= 2){

    return nu1+nu2
 }
 //takes default value one and two if no value is passed 
 addnum(23,55)


 //arrow function  //lexical this arrow function

 const add = (nu1 =1,nu2=3)=>{
     return nu1+nu2
 }
//implicit return  on arrow functio 

 const add1  =(nu1 =1,nu2=3)=> nu1+nu2

 add(2,3)


// if there is one value u dont need the perentesis 
 const ll = nu1=> nu1 + 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //object constructor := lets us creat many object using the constructor //date
 
 function Person (fname,lname ,dob ){
     this.fname= fname;
     thislname =lname 
     this. dob = new Date(dob);
     
     
 }
 Person.prototype.getbirthyear =function(){
     return this.dob.getFullYear()
 }
//instantiate objects  
const person1= new Person("fre","gg","3-21-1992")
console.log(person1.dob.getFullYear())


// class dose the same thing as constructor under the hood 


class frehiwot{
    constructor(name , age ,color){
        this.name = name ;
        this.age = age ;
        this.color = color ;
    }
getfullname(){
    return this.name + this.age 

}

}

//instantiation is the same as constructor function 
//////////////////////////////////////////////////////////////////////////////////////

let company =[
    {name:"comapany one ",catagory:"finance", start:1991 ,end:2003},
    {name:"comapany two ",catagory:"retail", start:1991 ,end:2008},
    {name:"comapany three ",catagory:"auto", start:1991 ,end:2007},
    {name:"comapany four ",catagory:"retail", start:1991 ,end:2009},
    {name:"comapany five ",catagory:"technology", start:1991 ,end:2014},
    {name:"comapany six ",catagory:"finance", start:1991 ,end:2010},
    {name:"comapany seven ",catagory:"auto", start:1991 ,end:1996},
    {name:"comapany eight ",catagory:"tecnology", start:1991 ,end:2016},
    {name:"comapany nine ",catagory:"retailer ", start:1991 ,end:1989},

];

const age = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]



 
           for(let i=0 ;i<company.length ; i++){
               console.log(company[i])
           }

  
//foreach -easy way to loop it is elegant  dosnt return anything //and it takes syncronus call back function 
//takes as a parameter three things (1 iteratir-what ever is in the company ,2=index ,3=entire array )
company.forEach(
    res=>{
        console.log(res.name)
    }
)
//filter-it allows us filter things out from the array 
let candrink =[];
for(let i=0;i<age.length ;i++){
    if(age[i]>21){
        candrink.push(age[i])
    }
}
console.log(candrink)
//usingfilter 
const ee = age.filter( res=> res>21)
const retail = company.filter(
       res => res.catagory === "retail")
          
       

console.log(retail)

//map === creat new array from a current arrray by modifing 
const test  = company.map((res)=> {

   return  res.name})

console.log(test)

let test3 = age.map(res=> Math.sqrt(res)).map(
    res=>res*3
)
console.log(test3)

//sort  = takes two value  depending on our condition we can return one or -1 

let ress = company.sort((a1,a2)=>{
    if(a1.start>a2.start){
        return 1
    }
    else{
        return -1 
    }
}
)
//using turnanry operation  using sort 

const turnup = company.sort((a,b)=>(a.start > b.start?1 :-1))


console.log(ress)

sortage = age.sort((a,b)=>a-b)

//reduce  === ====== ======== 
let agesum =age.reduce((total,age)=> total+age ,0)

console.log(agesum )

//cobine 

let combined