import React, { useContext } from 'react';
import { movieData } from './MovieContext';
const MovieList = () => {
    const [movies,setMovies] = useContext(movieData);
    return ( 
        <div>
            {
                movies.map(movie => (
                    <div key={movie.id}> 
                        <h1>{movie.name}</h1>
                        <h3>{movie.price}</h3>
                    </div>
                ))
            }
        </div>
     );
}
 
export default MovieList;