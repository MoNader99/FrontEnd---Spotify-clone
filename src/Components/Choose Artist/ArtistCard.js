import React,{useState} from 'react'
import './List.css'
export const ArtistCard = (props)=>{
    const [clicked,setclicked] = useState(false)
    if(clicked){
        return(
            <button className='unstyled-button clicked ' >
            <div onClick={()=>setclicked(!clicked)} className='card-design'>
                <img className='card-img' src={props.image}></img>
                <h1  className='card-h3 tc ' >{props.name}</h1>
            </div>
        </button>
        )
    }
    return(
        <button  className='unstyled-button' onClick={()=>setclicked(!clicked)} >
            <div className='card-design'>
                <img className='card-img' src={`${props.image}`}></img>
                <h1  className='card-h3 tc' >{props.name}</h1>
            </div>
        </button>
    )

}

// export default ArtistCard