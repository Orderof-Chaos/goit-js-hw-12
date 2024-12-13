import axios from 'axios';
export 
    async function fetchImg(request, pageNumb, perPage) {
    const response = await axios.get(`https://pixabay.com/api/`, {
        params: {
            key: "47546528-1d373426d359327bdc7f920b1",
            q: `${request}`,
            image_type: `photo`,
            page: pageNumb,
            per_page: perPage,
	}
   })
     return response.data;       
};
///?key=47546528-1d373426d359327bdc7f920b1&q=${request}&image_type=photo