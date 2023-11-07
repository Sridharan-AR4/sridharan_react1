var s="sridharan";
function func(num1,num2){
    return num1+num2;
}
let sum= (a,b) =>a+b;
console.log(sum(4,7));
var num1=4;
var num2=7;
console.log(func(num1,num2));
let arr=[1,2,3,4,5];
arr.forEach(helpfunc);
function helpfunc(n,i,a){
    console.log(n , i , a);
}
arr.forEach((n,i)=>{
    console.log(n , i);
})

//map
console.log(arr.map((q,w)=>q+w));
 
//filter
let newarr=arr.filter((n)=>n%2==0);
console.log(newarr);

//object
let person={
    name:"sridharan",
    age:18,
    contact:"123456789"
};
console.log(person);

//object destructor
let {n,age,cal}={
    n:"sri",
    age:18,
   // con:"12345"
    cal:()=>1*5
};
console.log(n,age,cal());

//array destructure
const[one,two, , ,five]=[1,2,3,4,5];
console.log(five);

//spread like copy paste
let person1={
    ...person,
};
console.log(person1.age);

/*let a=[1,2,3,4,5];
let arr1=...a;
console.log(arr1);*/


