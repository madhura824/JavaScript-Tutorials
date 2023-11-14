
var love2=document.querySelector("#love2");
var love1=document.querySelector("#love1");
love1.addEventListener("dblclick",function(){
   love1.style.color="red";
   love2.style.transform='translate(-50%,-50%) scale(1)';
   love2.style.opacity=0.8;

   setTimeout(function(){
    love2.style.transform='translate(-50%,-50%) scale(0)';
   },3000)
})