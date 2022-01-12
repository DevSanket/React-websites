import AddMovie from './AddMovie';
import './App.css';
import MovieData from './MovieContext';
import MovieList from './MovieList';

function App() {
  return (
   <MovieData>
     <div className='App'>
          <MovieList />
          <AddMovie />
     </div>
   </MovieData>
  );
}

export default App;
