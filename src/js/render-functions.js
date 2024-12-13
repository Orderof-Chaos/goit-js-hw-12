export
   function createMarkup(arr) {
            let result = arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    
     <a href="${largeImageURL}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${webformatURL}"
     alt="${tags}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${likes}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${views}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Comments</p>
     <p class = "info-data">${comments}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Downloads</p>
     <p class = "info-data">${downloads}</p>
     </li>

     </ul>
     </li>
     </a>`
        
    )
    
    return result.join(" ")}
    