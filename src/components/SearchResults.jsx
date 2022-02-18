import { useEffect, useState } from "react";
import SearchGifs from "./SearchGifs";
import GifList from "./GifList";
import { Search } from "../services/Constants";




export default function SearchResults(props){
    // inittialize the image list to the full list passed in props
    const [gifSearch, setGifSearch] = useState([])
    
    const fetchData = async (searchterm) => {
        try {
          const response = await Search(searchterm);
          setGifSearch(response.data.map((images) => images.images.downsized_medium.url));
          console.log(setGifSearch);
        } catch (error) {
          console.log(error);
        }
      }


    
    //handle the filter, and upstate when the filter value changes
    //store the filter state and filter the list of gifs to display

    const handleGifChange = (event) => {
        event.preventDefault();

        //  grab value from event
        const gifValue = event.target.value;
        // setGifSearch((_prevState) =>{
        //     remove gifs that don't contain the filter value
        //     const filteredGifList = props.gifs.filter((image) => {
        //     return image.toLowerCase().includes(gifValue.toLowerCase());
        //     });
        // return filteredGifList
        // return gifValue
        // })

        fetchData(gifValue);
        // console.log('THIS IS fetchData= ' + fetchData('dog'));
    }


    useEffect( () => {
        fetchData();
        console.log("do something", gifSearch)
    }, [])


    
    return (
        <div><h1>This is the Search-Gif Section</h1>
        <SearchGifs onClick={handleGifChange} onChange={(e) => handleGifChange(e)} />
        <br></br>
        <GifList gifs={gifSearch} />
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}