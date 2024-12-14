import{a as v,i as y,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();function m(o){return o.map(({webformatURL:l,largeImageURL:r,tags:e,likes:s,views:i,comments:L,downloads:w})=>`
    
     <a href="${r}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${l}"
     alt="${e}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${s}</p>
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
     <p class = "info-data">${w}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}async function h(o,t,l){return(await v.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${o}`,image_type:"photo",page:t,per_page:l}})).data}let u;const n=document.querySelector(".continue"),a=document.querySelector(".loader"),S=document.querySelector(".search"),b=document.querySelector(".search-bar"),d=document.querySelector(".gallery");let p,f=1,$=15,c=15;S.addEventListener("submit",async o=>{o.preventDefault(),d.innerHTML="",f=1,a.style.display="block";const t=await h(b.value.split(" ").join("+"),1,c);if(t.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),d.innerHTML="",a.style.display="none",n.style.display="none";return}t.totalHits<=c?n.style.display="none":n.style.display="flex",d.insertAdjacentHTML("beforeend",`${m(t.hits)}`),c=15,u=document.querySelector("body > main > ul > a:nth-child(1)"),p=u.getBoundingClientRect().height,p={top:p*2,left:0,behavior:"smooth"};let l=new g(".gallery a",{captionsData:"alt",captionDelay:250});l.on("show.simplelightbox",function(){}),a.style.display="none",l.refresh()});n.addEventListener("click",async o=>{o.preventDefault(),a.style.display="block",f+=1;const t=await h(b.value.split(" ").join("+"),f,$);if(d.insertAdjacentHTML("beforeend",`${m(t.hits)}`),c+=15,window.scrollBy(p),t.totalHits==c){n.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none";return}let l=new g(".gallery a",{captionsData:"alt",captionDelay:250});l.on("show.simplelightbox",function(){}),a.style.display="none",l.refresh()});
//# sourceMappingURL=index.js.map
