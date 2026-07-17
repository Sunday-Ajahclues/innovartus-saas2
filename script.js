// ===============================
// Innovartus SaaS Dashboard
// ===============================

// Dashboard metrics
let activeUsers = 10;
let deployments = 1;
let requests = 0;

const usersElement = document.getElementById("users");
const deploymentsElement = document.getElementById("deployments");
const requestsElement = document.getElementById("requests");
const logs = document.getElementById("logs");

const deployBtn = document.getElementById("deployBtn");
const themeBtn = document.getElementById("themeBtn");

// ===============================
// Toast Notification
// ===============================

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(()=>toast.remove(),500);

    },3000);

}

// ===============================
// Monitoring Logs
// ===============================

const messages = [

"Application Started",

"GitHub Push Detected",

"CI Pipeline Completed",

"Deployment Successful",

"Database Connected",

"API Request Completed",

"Autoscaling Check Passed",

"Health Check Passed",

"CPU Usage Normal",

"Monitoring Active",

"Security Scan Passed",

"New User Registered"

];

function addLog(message){

    const li=document.createElement("li");

    const time=new Date().toLocaleTimeString();

    li.innerHTML=`🟢 <strong>${time}</strong> - ${message}`;

    logs.prepend(li);

    if(logs.children.length>8){

        logs.removeChild(logs.lastChild);

    }

}

// ===============================
// Animated Counter
// ===============================

function animateCounter(element,start,end,duration){

    let startTime=null;

    function animation(current){

        if(!startTime) startTime=current;

        const progress=Math.min((current-startTime)/duration,1);

        element.textContent=Math.floor(progress*(end-start)+start);

        if(progress<1){

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}

// ===============================
// Simulated Live Traffic
// ===============================

setInterval(()=>{

    const previousUsers=activeUsers;

    activeUsers+=Math.floor(Math.random()*20);

    requests+=Math.floor(Math.random()*250)+20;

    animateCounter(usersElement,previousUsers,activeUsers,700);

    animateCounter(requestsElement,
    Number(requestsElement.textContent),
    requests,
    700);

    addLog(messages[Math.floor(Math.random()*messages.length)]);

},3000);

// ===============================
// Deployment Button
// ===============================

deployBtn.addEventListener("click",()=>{

    deployments++;

    deploymentsElement.textContent=deployments;

    addLog("🚀 Version "+deployments+" deployed automatically.");

    showToast("🚀 Deployment Successful!");

});

// ===============================
// Theme Toggle
// ===============================

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="☀️";

        localStorage.setItem("theme","light");

    }

    else{

        themeBtn.innerHTML="🌙";

        localStorage.setItem("theme","dark");

    }

});

// Load saved theme

window.addEventListener("load",()=>{

    if(localStorage.getItem("theme")==="light"){

        document.body.classList.add("light");

        themeBtn.innerHTML="☀️";

    }

});

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showToast("✅ Welcome to Innovartus Cloud Dashboard");

    },800);

});

// ===============================
// Fake Health Check
// ===============================

setInterval(()=>{

    const status=Math.random()>0.95
        ?"⚠️ Temporary latency detected."
        :"✅ All systems operational.";

    addLog(status);

},10000);

// ===============================
// Random CPU & Memory Logs
// ===============================

setInterval(()=>{

    const cpu=(Math.random()*50+20).toFixed(1);

    const memory=(Math.random()*40+30).toFixed(1);

    addLog(`CPU ${cpu}% | Memory ${memory}%`);

},7000);
