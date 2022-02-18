


export default function GifList(props){




    return (
      <div> 
        <div>
          { props.gifs.map((image) => {
            return <img src={image} /> 
          }) }
        </div>
      </div>
    )
  }