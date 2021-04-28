import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';



const Banner = () => {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
            // console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);
            return request;
        }
        fetchData();
    },[]);

    function truncate(str, num) {
        return str?.length > num ? str.substr(0,num-1)+"...":str;
      }

    return ( 
        <header className="banner" 
         style={{
             backgroundSize:"cover",
             backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition: "center center"
         }}
        > {/*Background Image */}
            <div className="banner_contents">


            
            {/* title  */}

            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
                
            </h1>

            {/* 2 Buttons  */}

            <div className="banner_buttons">
                    <button className="banner_button">
                    Play
                    </button>
                    <button className="banner_button">
                        My List
                    </button>
                </div>

            {/* description  */} 
            <h1 className="banner_description">
                {truncate(movie?.overview,150)}
            </h1>

            </div>

            <div className="banner--fadeBottom"></div>
        </header>
     );
}
 
export default Banner;
