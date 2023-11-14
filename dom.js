

var  a = document.querySelector("h1");
console.log(a);
a.style.color="green";
a.innerHTML="I am Changed";

var button=document.querySelector("button");
button.addEventListener("click",function(){
    a.style.backgroundColor="pink";

})

var on=document.getElementById("on");
var bulb=document.querySelector("#bulb");
var flag=0;

on.addEventListener("click",function(){

if(flag==0){

    bulb.style.backgroundColor="yellow"
    flag=1;

}
else{
    bulb.style.backgroundColor="transparent"
    flag=0;

}
})