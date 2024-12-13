import{a as w,i as y,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function h(o){return o.map(({webformatURL:s,largeImageURL:l,tags:t,likes:r,views:i,comments:L,downloads:v})=>`
    
     <a href="${l}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${s}"
     alt="${t}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${r}</p>
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
     </a>`).join(" ")}async function m(o,e,s){return(await w.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${o}`,image_type:"photo",page:e,per_page:s}})).data}let f;const c=document.querySelector(".continue"),p=document.querySelector(".loader"),S=document.querySelector(".search"),b=document.querySelector(".search-bar"),a=document.querySelector(".gallery");let n,d=1,$=15,u;S.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML="",d=1,p.style.display="block",m(b.value.split(" ").join("+"),1,15).then(e=>{if(e.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),a.innerHTML="";return}if(e.totalHits<=u){c.style.display="none";return}p.style.display="none",c.style.display="flex",a.insertAdjacentHTML("beforeend",`${h(e.hits)}`),d+=1,u=15,f=document.querySelector("body > main > ul > a:nth-child(1)"),n=f.getBoundingClientRect().height,n={top:n*2,left:0,behavior:"smooth"}}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),e.refresh()})});c.addEventListener("click",o=>{o.preventDefault(),p.style.display="block",m(b.value.split(" ").join("+"),d,$).then(e=>{if(e.totalHits<=u){c.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}a.insertAdjacentHTML("beforeend",`${h(e.hits)}`),d+=1,u+=15,window.scrollBy(n),p.style.display="none"}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),e.refresh()})});
//# sourceMappingURL=index.js.map
