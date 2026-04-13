// Floating hearts
setInterval(()=>{
let heart=document.createElement("div");
heart.innerHTML="💖";
heart.className="heart";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),5000);
},300);

// Confetti
function confetti(){
for(let i=0;i<100;i++){
let c=document.createElement("div");
c.style.position="fixed";
c.style.width="10px";
c.style.height="10px";
c.style.background="pink";
c.style.top="0";
c.style.left=Math.random()*100+"vw";
c.style.animation="fall 3s linear";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}

// Slideshow
let i=0;
function slideshow(){
let imgs=document.querySelectorAll(".slide");
imgs.forEach(img=>img.style.display="none");
i++;
if(i>imgs.length) i=1;
imgs[i-1].style.display="block";
setTimeout(slideshow,2000);
}

// Gift open
function openGift(){
document.getElementById("giftText").innerHTML="🎉 Surprise Coming in June 🎁";
confetti();
}