let banner=document.querySelector(".banner");
function f(){
    console.log("Banner bosildi")
}
banner.addEventListener("click",(e)=>{
    e.preventDefault()
    f();
})

