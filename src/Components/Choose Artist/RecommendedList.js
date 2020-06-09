import React from 'react';
import './List.css';
import {ArtistCard} from './ArtistCard'
import {ArtistsData} from './ArtistData'


const ArtistsRecommended = (List)=>{
    console.log('the name is',ArtistsData[7].name)
    return(
        <div >
            { 
                ArtistsData.map((user,i) =>{
                    return (
                        <ArtistCard 
                            id={ArtistsData[i].id} 
                            image={ArtistsData[i].image}
                            name={ArtistsData[i].name}
                        ></ArtistCard>
                    );
                })
            }
        </div>
    )
}

export default ArtistsRecommended