var elem=[
    {
        dp:"https://images.unsplash.com/photo-1585054992466-3eef36f43d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNodWJobWFuJTIwZ2lsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1695562672714-08e99cef2dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNodWJobWFuJTIwZ2lsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycyUyMHRlc2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1539057307452-65f8bc136475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
    }
]
var clutter="";

elem.forEach(function(val,idx){
clutter+= ` <div id="story">
<img id="${idx}" src="${val.dp}" alt=""> 
</div>`;
})

document.querySelector("#storiyan").innerHTML=clutter;

var storiyan =document.querySelector("#storiyan");

storiyan.addEventListener("click", function (details) {
    console.log(elem[details.target.id].story);
    document.querySelector("#displaycard").style.display ="block";
    document.querySelector("#displaycard").style.backgroundImage = `url(${elem[details.target.id].story})`;


    setTimeout(function(){
        document.querySelector("#displaycard").style.display ="none";
    },4000)
});