const mtgo=document.getElementsByClassName("main");
// console.log(mtgo);
const subt=document.getElementsByClassName("sub");
// console.log(subt);
const tgo=Array.from(subt);
// console.log(tgo);
tgo.map((item)=>item.firstElementChild.addEventListener("click",e=>{
    e.target.nextElementSibling.classList.toggle("top");

    // console.log(e.target.nextElementsibling);
}))

const body=document.getElementsByTagName("body")[0];
const right=document.createElement("div");
right.classList.add("right");
body.insertBefore(right,body.children[0]);
console.log(body);
const up=document.createElement("p");
up.classList.add("up");
body.insertBefore(up,right);
console.log(body);

const butn=document.createElement("button");
butn.classList.add("button");
butn.innerText="click"
body.insertBefore(butn,body.children[0]);

const video=document.getElementById("video");

butn.addEventListener("click",e=>{
   right.classList.toggle("righ");
    up.classList.toggle("down");
    
})

const song=document.getElementById("song");
song.addEventListener("click",e=>{
    e.target.innerText="song";
    e.target.style.backgroundColor="yellow";
    e.target.style.color="red";
    video.classList.toggle("myVideo");
})