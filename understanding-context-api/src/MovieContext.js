import React, { createContext, useState } from 'react';

export const movieData = createContext();

const MovieData = (props) => {
    const [movies,setMovies] = useState([
        {
            id:1,
            name:"83",
            price:"10$"
        },
        {
            id:2,
            name:"Avengers",
            price:"20$"
        },
        {
            id:3,
            name:"Pushpa",
            price:"25$"
        }

    ]);
    return ( 
        <movieData.Provider value={[movies,setMovies]}>
          {props.children}
        </movieData.Provider>
     );
}
 
export default MovieData;