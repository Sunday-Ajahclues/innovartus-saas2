const u=users,d=deployments,r=requests,l=logs;
let usersCount=10,dep=1,req=0;
themeBtn.onclick=()=>document.body.classList.toggle('light');
deployBtn.onclick=()=>{dep++;d.textContent=dep;let li=document.createElement('li');li.textContent='Deployment '+dep+' successful';l.prepend(li);alert('CI/CD deployment successful!');};
setInterval(()=>{usersCount+=Math.floor(Math.random()*8);req+=Math.floor(Math.random()*100);u.textContent=usersCount;r.textContent=req;},2000);
