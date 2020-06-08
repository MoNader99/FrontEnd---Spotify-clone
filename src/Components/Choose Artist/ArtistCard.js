import React,{useState} from 'react'
import './List.css'
const ArtistCard = (id,image,name)=>{
    const [clicked,setclicked] = useState(false)
    if(clicked){
        return(
            <button className='unstyled-button clicked ' >
            <div onClick={()=>setclicked(!clicked)} className='card-design'>
                <img className='card-img' src={image}></img>
                <h3  className='card-h3 ' >{name}</h3>
            </div>
        </button>
        )
    }
    return(
        <button  className='unstyled-button' onClick={()=>setclicked(!clicked)} >
            <div className='card-design'>
                <img className='card-img' src={`${image}`}></img>
                <h3  className='card-h3' >{name}</h3>
            </div>
        </button>
    )

}

export default ArtistCard