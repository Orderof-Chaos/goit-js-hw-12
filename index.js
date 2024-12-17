import{a as q,S as v,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function h(s){return s.map(({webformatURL:i,largeImageURL:n,tags:t,likes:r,views:c,comments:S,downloads:$})=>`
    
     <a href="${n}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${i}"
     alt="${t}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${r}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${c}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Comments</p>
     <p class = "info-data">${S}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Downloads</p>
     <p class = "info-data">${$}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}async function b(s,e,i){return(await q.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${s}`,image_type:"photo",page:e,per_page:i}})).data}let g;const o=document.querySelector(".continue"),a=document.querySelector(".loader"),H=document.querySelector(".search"),m=document.querySelector(".search-bar"),l=document.querySelector(".gallery");let f,y,u=1,w=15,p=15,L=new v(".gallery a",{captionsData:"alt",captionDelay:250});H.addEventListener("submit",async s=>{if(s.preventDefault(),a.style.display="block",l.innerHTML="",o.style.display="none",p=15,u=1,f=m.value.trim().split(" ").join("+"),f===""){d.error({message:'Please fill in the "search images..." field.',position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML="";return}m.value="";try{const e=await b(f,1,p);if(e.totalHits===0){a.style.display="none",d.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML="";return}e.totalHits>p&&(o.style.display="flex"),l.insertAdjacentHTML("beforeend",`${h(e.hits)}`),a.style.display="none",L.refresh(),g=document.querySelector("body > main > ul > a:nth-child(1)"),y=g.getBoundingClientRect().height,y={top:y*2,left:0,behavior:"smooth"}}catch(e){a.style.display="none",o.style.display="none",d.error({message:`Sorry, a ${e} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML=""}});o.addEventListener("click",async s=>{s.preventDefault(),o.style.display="none",a.style.display="block",u+=1;try{const e=await b(f,u,w);if(l.insertAdjacentHTML("beforeend",`${h(e.hits)}`),a.style.display="none",L.refresh(),p+=15,e.totalHits<=p){a.style.display="none",o.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}window.scrollBy(y),o.style.display="flex"}catch(e){a.style.display="none",o.style.display="none",d.error({message:`Sorry, a ${e} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML=""}});
//# sourceMappingURL=index.js.map
