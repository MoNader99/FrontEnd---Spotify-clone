import React from 'react';
import './List.css';
import Card from './ArtistCard'
import {ArtistsData} from './ArtistData'


const ArtistsRecommended = (List)=>{
    console.log('the name is',ArtistsData[7].name)
    return(
        <div >
            { 
                ArtistsData.map((user,i) =>{
                    return (
                        <Card 
                            key={i} 
                            id={ArtistsData[i].id} 
                            image={ArtistsData[i].image}
                            name={ArtistsData[i].name}
                        />
                    );
                })
            }
        </div>
    )
}

export default ArtistsRecommended