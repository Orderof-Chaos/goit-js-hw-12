import{a as v,i as y,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function m(a){return a.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:i,comments:L,downloads:w})=>`
    
     <a href="${r}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${o}"
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
     </a>`).join(" ")}async function h(a,t,o){return(await v.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${a}`,image_type:"photo",page:t,per_page:o}})).data}let u;const p=document.querySelector(".continue"),l=document.querySelector(".loader"),S=document.querySelector(".search"),b=document.querySelector(".search-bar"),c=document.querySelector(".gallery");let d,f=1,$=15,n=15;S.addEventListener("submit",async a=>{a.preventDefault(),c.innerHTML="",p.style.display="none",n=15,f=1,l.style.display="block";const t=await h(b.value.split(" ").join("+"),1,n);if(t.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),c.innerHTML="",l.style.display="none";return}t.totalHits>n&&(p.style.display="flex"),c.insertAdjacentHTML("beforeend",`${m(t.hits)}`),u=document.querySelector("body > main > ul > a:nth-child(1)"),d=u.getBoundingClientRect().height,d={top:d*2,left:0,behavior:"smooth"};let o=new g(".gallery a",{captionsData:"alt",captionDelay:250});o.on("show.simplelightbox",function(){}),l.style.display="none",o.refresh()});p.addEventListener("click",async a=>{a.preventDefault(),l.style.display="block",f+=1;const t=await h(b.value.split(" ").join("+"),f,$);if(c.insertAdjacentHTML("beforeend",`${m(t.hits)}`),n+=15,window.scrollBy(d),t.totalHits==n){p.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.style.display="none";return}let o=new g(".gallery a",{captionsData:"alt",captionDelay:250});o.on("show.simplelightbox",function(){}),l.style.display="none",o.refresh()});
//# sourceMappingURL=index.js.map
