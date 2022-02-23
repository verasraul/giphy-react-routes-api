import axios from "axios";



export async function Constants(){
    const Result = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${RANDOM_API_KEY}&tag=&rating=g`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}

export async function Search(searchterm){
    const SearchResult = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${SEARCH_API_KEY}&q=${searchterm}&limit=25&offset=0&rating=g&lang=en`)
    .then(({ data }) => {
        return data;
      });
      return SearchResult;
    
}

// const fetchData = async () => {
//   try {
//     const response = await Search();
//     setGifs(response.data.images.original.url);
//     // console.log(setGifs);
//   } catch (error) {
//     console.log(error);
//   }
// }
// console.log(fetchData);
// useEffect(() => {
// fetchData();
// }, [])

// export default SearchResult 


// export const CLIENT_URL="https://api.giphy.com/v1/gifs/random?api_key=sX3CW8Svagrh96ijxstWvyCVK16QCGxa&tag=&rating=g"