import{a as S,S as $,i as y}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function g(r){return r.map(({webformatURL:o,largeImageURL:l,tags:e,likes:s,views:i,comments:L,downloads:v})=>`
    
     <a href="${l}"><li class="gallery-card">
      
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
     <p class = "info-data">${v}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}async function m(r,t,o){return(await S.get("https://pixabay.com/api/",{params:{key:"47546528-1d373426d359327bdc7f920b1",q:`${r}`,image_type:"photo",page:t,per_page:o}})).data}let u;const p=document.querySelector(".continue"),a=document.querySelector(".loader"),q=document.querySelector(".search"),h=document.querySelector(".search-bar"),c=document.querySelector(".gallery");let d,f=1,w=15,n=15,b=new $(".gallery a",{captionsData:"alt",captionDelay:250});q.addEventListener("submit",async r=>{r.preventDefault(),c.innerHTML="",p.style.display="none",n=15,f=1,a.style.display="block";const t=await m(h.value.split(" ").join("+"),1,n);if(t.totalHits===0){y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),c.innerHTML="",a.style.display="none";return}t.totalHits>n&&(p.style.display="flex"),c.insertAdjacentHTML("beforeend",`${g(t.hits)}`),b.refresh(),u=document.querySelector("body > main > ul > a:nth-child(1)"),d=u.getBoundingClientRect().height,d={top:d*2,left:0,behavior:"smooth"},a.style.display="none"});p.addEventListener("click",async r=>{r.preventDefault(),a.style.display="block",f+=1;const t=await m(h.value.split(" ").join("+"),f,w);if(c.insertAdjacentHTML("beforeend",`${g(t.hits)}`),b.refresh(),n+=15,window.scrollBy(d),t.totalHits<=n){p.style.display="none",y.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none";return}a.style.display="none"});
//# sourceMappingURL=index.js.map
