import './App.css';
import React from 'react';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* Navbar  */}

      {/* Banner  */}
      <Banner/>
      <Row
      title ="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
       <Row
      title ="Trending Now"
      fetchUrl={requests.fetchTrending}
      />
       <Row
      title ="Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
       <Row
      title ="Action Movies"
      fetchUrl={requests.fetchActionMovies}
      />
       <Row
      title ="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      />
       <Row
      title ="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
       <Row
      title ="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
       <Row
      title ="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;


// Use ApI

// https://api.themoviedb.org/3/movie/550?api_key=3e4bd4e12ae025d1c5e843647043c0b0

// API Key: 3e4bd4e12ae025d1c5e843647043c0b0