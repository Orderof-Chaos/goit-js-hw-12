import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';
import {createMarkup} from "./js/render-functions.js";
import { fetchImg } from "./js/pixabay-api.js";
let firstCard 
const contBtn = document.querySelector(".continue")
const loader = document.querySelector(".loader")
const searchForm = document.querySelector(".search")
const search = document.querySelector(".search-bar")
const gallery = document.querySelector(".gallery")
let scrollParams
let page = 1;
let perPage = 15;
let loadedImgs = 15;
let lightbox = new SimpleLightbox(`.gallery a`, { captionsData: "alt", captionDelay: 250 })
searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    loader.style.display = `block`;
    gallery.innerHTML = ""
    contBtn.style.display = `none`;
    loadedImgs = 15;
    page = 1;
    try {
        const data = await fetchImg(search.value.trim().split(" ").join("+"), 1, loadedImgs)
        
    if (data.totalHits === 0) {
        loader.style.display = `none`;
        iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please, try again!",
                    position: "topRight",
                    color: "#ef4040",
                    messageColor: "#fafafb"
                })
                gallery.innerHTML = ``;
                return
                }
                if (data.totalHits > loadedImgs) {
                    contBtn.style.display = `flex`
                }
                
                
                
    gallery.insertAdjacentHTML("beforeend", `${createMarkup(data.hits)}`)
    loader.style.display = `none`;
    lightbox.refresh()
    firstCard = document.querySelector("body > main > ul > a:nth-child(1)");
    scrollParams = firstCard.getBoundingClientRect().height;
                
                
    scrollParams = {
        top: scrollParams * 2,
        left: 0,
        behavior: "smooth"
    }
    } catch(error) {
        loader.style.display = `none`;
        contBtn.style.display = `none`;
        iziToast.error({
                    message: `Sorry, a ${error} error occurred`,
                    position: "topRight",
                    color: "#ef4040",
                    messageColor: "#fafafb"
                })
                gallery.innerHTML = ``;}
    }
   
)
    
contBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    contBtn.style.display = `none`;
    loader.style.display = `block`;
    page += 1;
    try{const data = await fetchImg(search.value.trim().split(" ").join("+"), page, perPage)
     
    gallery.insertAdjacentHTML("beforeend", `${createMarkup(data.hits)}`)
    loader.style.display = `none`;
    lightbox.refresh()
    loadedImgs += 15;
    if (data.totalHits <= loadedImgs) {
        loader.style.display = `none`;
        contBtn.style.display = `none`;
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight"
        })
        return
    }
    window.scrollBy(scrollParams);
        contBtn.style.display = `flex`;
    } catch (error) {
        loader.style.display = `none`;
        contBtn.style.display = `none`;
        iziToast.error({
                    message: `Sorry, a ${error} error occurred`,
                    position: "topRight",
                    color: "#ef4040",
                    messageColor: "#fafafb"
                })
                gallery.innerHTML = ``;}
}
)  