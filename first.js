let button=document.querySelector("button");

let ul=document.querySelector("ul");

let inp=document.querySelector("input");


button.addEventListener("click",function(){
    let item=document.createElement("li");

    item.innerText=inp.value;


    let delbt=document.createElement("button");
    delbt.innerText="delete";
    delbt.classList.add("delete");

    item.appendChild(delbt);

    ul.appendChild(item);

    inp.value="";


});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let l=event.target.parentElement;
        l.remove();
    }
});