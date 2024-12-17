import{a as $,S as v,i as y}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function m(s){return s.map(({webformatURL:l,largeImageURL:i,tags:e,likes:r,views:n,comments:L,downloads:S})=>`
    
     <a href="${i}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${l}"
     alt="${e}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${r}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${n}</p>
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
     </a>`).join(" ")}async function g(s,t,l){return(await $.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${s}`,image_type:"photo",page:t,per_page:l}})).data}let u;const o=document.querySelector(".continue"),a=document.querySelector(".loader"),q=document.querySelector(".search"),h=document.querySelector(".search-bar"),c=document.querySelector(".gallery");let p,f=1,w=15,d=15,b=new v(".gallery a",{captionsData:"alt",captionDelay:250});q.addEventListener("submit",async s=>{s.preventDefault(),a.style.display="block",c.innerHTML="",o.style.display="none",d=15,f=1;try{const t=await g(h.value.trim().split(" ").join("+"),1,d);if(t.totalHits===0){a.style.display="none",y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),c.innerHTML="";return}t.totalHits>d&&(o.style.display="flex"),c.insertAdjacentHTML("beforeend",`${m(t.hits)}`),a.style.display="none",b.refresh(),u=document.querySelector("body > main > ul > a:nth-child(1)"),p=u.getBoundingClientRect().height,p={top:p*2,left:0,behavior:"smooth"}}catch(t){a.style.display="none",o.style.display="none",y.error({message:`Sorry, a ${t} error occurred`,position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),c.innerHTML=""}});o.addEventListener("click",async s=>{s.preventDefault(),o.style.display="none",a.style.display="block",f+=1;const t=await g(h.value.trim().split(" ").join("+"),f,w);if(c.insertAdjacentHTML("beforeend",`${m(t.hits)}`),a.style.display="none",b.refresh(),d+=15,t.totalHits<=d){a.style.display="none",o.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}window.scrollBy(p),o.style.display="flex"});
//# sourceMappingURL=index.js.map
