const mtgo=document.getElementsByClassName("main");
console.log(mtgo);
const tgo=Array.from(mtgo);
console.log(tgo);
tgo.map((item)=>item.firstElementChild.addEventListener("click",e=>{
    e.target.nextElementsibling.classList.toggle("top");
    console.log(e.target.nextElementsibling);
}))

const body=document.querySelector("body");
const right=document.createElement("right");
right.classList.add("right");
body.insertBefore(right,body.children[0]);
console.log(body);
const up=document.createElement("up");
up.classList.add("up");
body.insertBefore(up,right);
console.log(body);

let butn=document.createElement("button");
butn.classList.add("button");
butn.innerText="click"
body.insertBefore(butn,body.children[0]);

let video=document.getElementById("video");

butn.addEventListener("click",e=>{
   e.right.classList.toggle("cover");
    up.classList.toggle("down");
    
})

let song=document.getElementById("song");
song.addEventListener("click",e=>{
    e.target.innerText="song";
    e.target.style.backgroundColor="yellow";
    e.target.style.color="red";
    video.classList.toggle("showVideo");
})