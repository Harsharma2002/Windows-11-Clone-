function fscreen(){
    document.getElementsByClassName('mainbody')[0].requestFullscreen();
}

let pull = document.getElementsByClassName("pull")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

pull.addEventListener("click", ()=>{

if(startmenu.style.bottom=="30px"){
    startmenu.style.bottom="-255px"
}
else{
    startmenu.style.bottom="30px"
}
})

let search = document.getElementsByClassName("search")[0];
searchmenu = document.getElementsByClassName("searchmenu")[0];

search.addEventListener("click", ()=>{

if(searchmenu.style.bottom=="30px"){
    searchmenu.style.bottom="-255px"
}
else{
    searchmenu.style.bottom="30px"
}
})