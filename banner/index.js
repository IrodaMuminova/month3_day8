let banner=document.querySelector(".banner");
function f(){
    console.log("Banner bosildi")
}
let i=0;
banner.addEventListener("click",(e)=>{
    i++;
    e.preventDefault()
    console.log(`${i}`);
    f();
})

