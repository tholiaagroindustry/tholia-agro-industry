function toggleMenu() {
document.getElementById("navMenu").classList.toggle("active");
}
function toggleMenu() {
document.getElementById("navMenu").classList.toggle("active");
}

document.getElementById("dealerForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let city=document.getElementById("city").value;
let cattle=document.getElementById("cattle").value;
let message=document.getElementById("message").value;

let text=`New Dealer Inquiry

Name: ${name}
Mobile: ${mobile}
Village/City: ${city}
Cattle: ${cattle}

Message:
${message}`;

window.open("https://wa.me/919813246435?text="+encodeURIComponent(text),"_blank");

});
window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(document.documentElement.scrollTop>300){
btn.style.display="block";
}else{
btn.style.display="none";
}

}

function scrollToTop(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
