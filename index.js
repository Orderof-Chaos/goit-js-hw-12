import{a as w,i as y,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function h(l){return l.map(({webformatURL:r,largeImageURL:i,tags:t,likes:s,views:a,comments:L,downloads:v})=>`
    
     <a href="${i}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${r}"
     alt="${t}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${s}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${a}</p>
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
     </a>`).join(" ")}async function m(l,e,r){return(await w.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${l}`,image_type:"photo",page:e,per_page:r}})).data}let f;const p=document.querySelector(".continue"),o=document.querySelector(".loader"),S=document.querySelector(".search"),b=document.querySelector(".search-bar"),n=document.querySelector(".gallery");let c,d=1,$=15,u;S.addEventListener("submit",l=>{l.preventDefault(),n.innerHTML="",d=1,o.style.display="block",m(b.value.split(" ").join("+"),1,15).then(e=>{if(e.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),n.innerHTML="",o.style.display="none";return}if(e.totalHits<=u){p.style.display="none",o.style.display="none";return}p.style.display="flex",n.insertAdjacentHTML("beforeend",`${h(e.hits)}`),d+=1,u=15,f=document.querySelector("body > main > ul > a:nth-child(1)"),c=f.getBoundingClientRect().height,c={top:c*2,left:0,behavior:"smooth"}}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),o.style.display="none",e.refresh()})});p.addEventListener("click",l=>{l.preventDefault(),o.style.display="block",m(b.value.split(" ").join("+"),d,$).then(e=>{if(e.totalHits<=u){p.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.style.display="none";return}n.insertAdjacentHTML("beforeend",`${h(e.hits)}`),d+=1,u+=15,window.scrollBy(c)}).then(()=>{let e=new g(".gallery a",{captionsData:"alt",captionDelay:250});e.on("show.simplelightbox",function(){}),o.style.display="none",e.refresh()})});
//# sourceMappingURL=index.js.map
