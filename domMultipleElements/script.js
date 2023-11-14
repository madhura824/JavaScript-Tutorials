

var ele=document.querySelectorAll("#ele");


ele.forEach(function(val){

    //as we want the img inside the val we use child node

    val.addEventListener("mouseenter",function(){
       
        val.childNodes[3].style.opacity=1;
    
    })
    ,
    val.addEventListener("mousemove",function(details){
        
        val.childNodes[3].style.left=details.x+"px";
        val.childNodes[3].style.top=details.y+"px";
        
    
    }),
    val.addEventListener("mouseleave",function(){
        //here there are 2 children h1 and img
        //but javascript considers 5  h1 text img text
        //img =childNodes[3]
        val.childNodes[3].style.opacity=0;
        
    
    })
})
