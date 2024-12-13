import{a as w,i as y,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}})();function h(r){return r.map(({webformatURL:o,largeImageURL:s,tags:t,likes:l,views:i,comments:L,downloads:v})=>`
    
     <a href="${s}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${o}"
     alt="${t}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${l}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${i}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Comments</p>
     <p class = "info-data">${L}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Downloads</p>
     <p class = "info-data">${v}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}async function m(r,e,o){return(await w.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${r}`,image_type:"photo",page:e,per_page:o}})).data}let u;const c=document.querySelector(".continue"),p=document.querySelector(".loader"),S=document.querySelector(".search"),b=document.querySelector(".search-bar"),a=document.querySelector(".gallery");let n,f=1,$=15,d;S.addEventListener("submit",r=>{r.preventDefault(),a.innerHTML="",f=1,p.style.display="block",m(b.value.split(" ").join("+"),1,15).then(e=>{if(e.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),a.innerHTML="";return}if(e.totalHits<=d){c.style.display="none";return}c.style.display="flex",a.insertAdjacentHTML("beforeend",`${h(e.hits)}`),f+=1,d=15,u=document.querySelector("body > main > ul > a:nth-child(1)"),n=u.getBoundingClientRect().height,n={top:n*2,left:0,behavior:"smooth"}}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),e.refresh()}).finally(()=>{p.style.display="none"})});c.addEventListener("click",r=>{r.preventDefault(),p.style.display="block",m(b.value.split(" ").join("+"),f,$).then(e=>{if(e.totalHits<=d){c.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}a.insertAdjacentHTML("beforeend",`${h(e.hits)}`),f+=1,d+=15,window.scrollBy(n)}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),e.refresh()}).finally(()=>{p.style.display="none"})});
//# sourceMappingURL=index.js.map
