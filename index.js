import{a as $,S as v,i as y}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function g(s){return s.map(({webformatURL:i,largeImageURL:n,tags:t,likes:r,views:c,comments:L,downloads:S})=>`
    
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
     <p class = "info-data">${L}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Downloads</p>
     <p class = "info-data">${S}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}async function m(s,e,i){return(await $.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${s}`,image_type:"photo",page:e,per_page:i}})).data}let u;const o=document.querySelector(".continue"),a=document.querySelector(".loader"),q=document.querySelector(".search"),h=document.querySelector(".search-bar"),l=document.querySelector(".gallery");let p,f=1,w=15,d=15,b=new v(".gallery a",{captionsData:"alt",captionDelay:250});q.addEventListener("submit",async s=>{s.preventDefault(),a.style.display="block",l.innerHTML="",o.style.display="none",d=15,f=1;try{const e=await m(h.value.trim().split(" ").join("+"),1,d);if(e.totalHits===0){a.style.display="none",y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML="";return}e.totalHits>d&&(o.style.display="flex"),l.insertAdjacentHTML("beforeend",`${g(e.hits)}`),a.style.display="none",b.refresh(),u=document.querySelector("body > main > ul > a:nth-child(1)"),p=u.getBoundingClientRect().height,p={top:p*2,left:0,behavior:"smooth"}}catch(e){a.style.display="none",o.style.display="none",y.error({message:`Sorry, a ${e} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML=""}});o.addEventListener("click",async s=>{s.preventDefault(),o.style.display="none",a.style.display="block",f+=1;try{const e=await m(h.value.trim().split(" ").join("+"),f,w);if(l.insertAdjacentHTML("beforeend",`${g(e.hits)}`),a.style.display="none",b.refresh(),d+=15,e.totalHits<=d){a.style.display="none",o.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}window.scrollBy(p),o.style.display="flex"}catch(e){a.style.display="none",o.style.display="none",y.error({message:`Sorry, a ${e} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),l.innerHTML=""}});
//# sourceMappingURL=index.js.map
