var slajdovi=document.querySelector('.slajderdeo').children;
var sledeci=document.querySelector('.desni');
var prethodni=document.querySelector('.levi');
var svislajdovi=slajdovi.length;
var index=0;
sledeci.onclick=function() {
sl("sl");
}
prethodni.onclick=function() {
    sl("pr");
}

function sl(smer) {

    if(smer =="sl") {
index++;
if(index==svislajdovi){
    index=0;
}

    }

else{
if(index==0) {
    index=svislajdovi-1;
}
else {
    index--;
}

}
for(i=0; i<slajdovi.length; i++) {
slajdovi[i].classList.remove("active");
}
    slajdovi[index].classList.add("active");
}