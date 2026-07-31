/* =====================================
   MICKU ❤️ PREMIUM WEBSITE
   SCRIPT.JS - PART 1
===================================== */

const loader = document.getElementById("loader");
const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },2500);

});

/* ===========================
   PASSWORD
=========================== */

function unlockWebsite(){

    const value = passwordInput.value.trim();

    if(value === CONFIG.password){

        passwordScreen.style.display = "none";

        document.body.style.overflow = "auto";

        music.play().catch(()=>{});

        startLoveTimer();

    }

    else{

        alert("Wrong Password ❤️");

    }

}

unlockBtn.addEventListener("click",unlockWebsite);

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ===========================
   LOVE TIMER
=========================== */

function startLoveTimer(){

    const startDate = new Date(CONFIG.relationshipDate);

    updateTimer();

    setInterval(updateTimer,1000);

    function updateTimer(){

        const now = new Date();

        let diff = now - startDate;

        let totalHours = Math.floor(diff / 3600000);

        let totalDays = Math.floor(diff / 86400000);

        let y = Math.floor(totalDays / 365);

        let m = Math.floor((totalDays % 365)/30);

        let d = totalDays % 30;

        let h = totalHours % 24;

        days.textContent = totalDays;
        hours.textContent = h;
        minutes.textContent = Math.floor((diff % 3600000) / 60000);
        seconds.textContent = Math.floor((diff % 60000) / 1000);

    }

}

/* ===========================
   MUSIC
=========================== */

let playing = true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="🎵";

    }

    else{

        music.play();

        musicBtn.innerHTML="🔊";

    }

    playing=!playing;

});
/* =====================================
   SCRIPT.JS - PART 2
   Gallery + Hearts + Petals + Reveal
===================================== */

/* ===========================
   GALLERY POPUP
=========================== */

const viewer = document.getElementById("imageViewer");
const popupImage = document.getElementById("popupImage");
const closeViewer = document.getElementById("closeViewer");

document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("click",()=>{

        popupImage.src = img.src;

        viewer.style.display="flex";

        document.body.style.overflow="hidden";

    });

});

closeViewer.addEventListener("click",()=>{

    viewer.style.display="none";

    document.body.style.overflow="auto";

});

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        viewer.style.display="none";

        document.body.style.overflow="auto";

    }

});

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,900);

/* ===========================
   ROSE PETALS
=========================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌹";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(7+Math.random()*6)+"s";

    petal.style.opacity=Math.random();

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,1600);

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals=document.querySelectorAll(".fade-up");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

reveals.forEach(item=>{

    observer.observe(item);

});

/* ===========================
   JOURNEY BUTTON
=========================== */

const journey=document.getElementById("journeyBtn");

if(journey){

    journey.addEventListener("click",()=>{

        document.getElementById("story").scrollIntoView({

            behavior:"smooth"

        });

    });

}

/* ===========================
   SMALL PARALLAX
=========================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-image");

    if(hero){

        hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

    }

});
/* =====================================
   SCRIPT.JS - PART 3
   Fireworks + Confetti + Gift + Cursor
===================================== */

/* ===========================
   GIFT BOX
=========================== */

const giftBtn = document.getElementById("giftBtn");

if(giftBtn){

    giftBtn.addEventListener("click",()=>{

        launchConfetti();
        launchFireworks();

        alert("🎁 Surprise!\n\nI Love You So Much Micku ❤️");

    });

}

/* ===========================
   CURSOR GLOW
=========================== */

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="rgba(255,79,149,.6)";
glow.style.pointerEvents="none";
glow.style.filter="blur(8px)";
glow.style.zIndex="999999";
glow.style.transition="transform .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});

/* ===========================
   CONFETTI
=========================== */

function launchConfetti(){

    for(let i=0;i<120;i++){

        const c=document.createElement("div");

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.width="8px";
        c.style.height="14px";
        c.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        c.style.zIndex="99999";

        c.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(c);

        const duration=3000+Math.random()*2500;

        c.animate([

            {
                transform:`translateY(0) rotate(0deg)`
            },

            {
                transform:
                `translateY(${window.innerHeight+100}px)
                 rotate(${720+Math.random()*360}deg)`
            }

        ],{

            duration:duration,
            easing:"ease-out"

        });

        setTimeout(()=>{

            c.remove();

        },duration);

    }

}

/* ===========================
   FIREWORKS
=========================== */

function launchFireworks(){

    for(let i=0;i<18;i++){

        setTimeout(()=>{

            createExplosion(

                Math.random()*window.innerWidth,

                Math.random()*window.innerHeight*0.6

            );

        },i*180);

    }

}

function createExplosion(x,y){

    for(let i=0;i<35;i++){

        const p=document.createElement("div");

        p.style.position="fixed";
        p.style.left=x+"px";
        p.style.top=y+"px";
        p.style.width="6px";
        p.style.height="6px";
        p.style.borderRadius="50%";
        p.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        p.style.zIndex="999999";

        document.body.appendChild(p);

        const angle=Math.random()*Math.PI*2;
        const distance=80+Math.random()*120;

        p.animate([

            {
                transform:"translate(0,0)",
                opacity:1
            },

            {
                transform:
                `translate(
                ${Math.cos(angle)*distance}px,
                ${Math.sin(angle)*distance}px)`,

                opacity:0
            }

        ],{

            duration:1400,
            easing:"ease-out"

        });

        setTimeout(()=>{

            p.remove();

        },1400);

    }

}
/* =====================================
   SCRIPT.JS - PART 4
   Premium Effects
===================================== */

/* ===========================
   TWINKLING STARS
=========================== */

const starsContainer=document.querySelector(".stars");

if(starsContainer){

    for(let i=0;i<80;i++){

        const star=document.createElement("span");

        star.style.position="absolute";
        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        const size=Math.random()*3+1;

        star.style.width=size+"px";
        star.style.height=size+"px";

        star.style.borderRadius="50%";
        star.style.background="#fff";

        star.style.opacity=Math.random();

        star.style.animation=
        `twinkle ${2+Math.random()*4}s infinite alternate`;

        starsContainer.appendChild(star);

    }

}

/* ===========================
   TWINKLE KEYFRAMES
=========================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{
opacity:.2;
transform:scale(.8);
}

100%{
opacity:1;
transform:scale(1.5);
}

}

`;

document.head.appendChild(style);

/* ===========================
   RANDOM LOVE QUOTES
=========================== */

const quotes=[

"I fall in love with you every single day ❤️",

"You are my safest place.",

"My favourite notification is yours.",

"Forever starts with you.",

"You are my home.",

"I'll always choose you.",

"My heart belongs to Micku ❤️"

];

function showLoveQuote(){

    const msg=document.createElement("div");

    msg.innerHTML=quotes[
        Math.floor(Math.random()*quotes.length)
    ];

    msg.style.position="fixed";

    msg.style.left="50%";
    msg.style.top="25px";

    msg.style.transform="translateX(-50%)";

    msg.style.padding="14px 26px";

    msg.style.borderRadius="40px";

    msg.style.background="rgba(0,0,0,.55)";

    msg.style.backdropFilter="blur(12px)";

    msg.style.color="white";

    msg.style.zIndex="999999";

    msg.style.opacity="0";

    msg.style.transition=".5s";

    document.body.appendChild(msg);

    setTimeout(()=>{

        msg.style.opacity="1";

    },100);

    setTimeout(()=>{

        msg.style.opacity="0";

        setTimeout(()=>{

            msg.remove();

        },600);

    },3500);

}

setInterval(showLoveQuote,30000);

/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.45)";

ripple.style.left=
e.offsetX-size/2+"px";

ripple.style.top=
e.offsetY-size/2+"px";

ripple.style.pointerEvents="none";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* ===========================
   AUTO SCROLL REVEAL
=========================== */

document.querySelectorAll(

".story-card,.memory-card,.gallery-item,.reason-card,.promise-card"

).forEach(el=>{

el.classList.add("fade-up");

});

/* ===========================
   PAGE FADE
=========================== */

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition="opacity 1s";

document.body.style.opacity="1";

},100);

});
/* =====================================
   SCRIPT.JS - PART 5 (FINAL)
   Premium Finish
===================================== */

/* ===========================
   MAGNETIC BUTTONS
=========================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

button.style.transform=
`translate(${x*0.15}px,${y*0.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

/* ===========================
   SPARKLE CURSOR
=========================== */

document.addEventListener("mousemove",(e)=>{

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";
sparkle.style.left=e.clientX+"px";
sparkle.style.top=e.clientY+"px";
sparkle.style.pointerEvents="none";
sparkle.style.fontSize="14px";
sparkle.style.zIndex="999999";

document.body.appendChild(sparkle);

sparkle.animate([

{
transform:"translateY(0) scale(1)",
opacity:1
},

{
transform:"translateY(-35px) scale(.4)",
opacity:0
}

],{

duration:700,
easing:"ease-out"

});

setTimeout(()=>{

sparkle.remove();

},700);

});

/* ===========================
   MEMORY CARD 3D EFFECT
=========================== */

document.querySelectorAll(".memory-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rx=((y-rect.height/2)/12);
const ry=((rect.width/2-x)/12);

card.style.transform=
`perspective(1000px)
 rotateX(${rx}deg)
 rotateY(${ry}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/* ===========================
   GIFT OPENING
=========================== */

if(giftBtn){

giftBtn.addEventListener("click",()=>{

giftBtn.innerHTML="❤️ Opened ❤️";

giftBtn.disabled=true;

});

}

/* ===========================
   PERFORMANCE
=========================== */

window.addEventListener("blur",()=>{

music.pause();

});

window.addEventListener("focus",()=>{

if(playing){

music.play().catch(()=>{});

}

});

/* ===========================
   FINAL MESSAGE
=========================== */

console.log(
"%c❤️ Welcome Buggu ❤️",
"font-size:22px;color:#ff4f95;font-weight:bold;"
);

console.log(
"%cMade with endless love for Micku 💖",
"font-size:16px;color:#ffd166;"
);
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-up").forEach(el => {
        el.classList.add("show");
    });
});
