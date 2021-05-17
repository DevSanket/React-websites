import React, { Component } from "react";
import { getMovies } from "../Services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = movie => {
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({movies});
  }
  render() {
    if(this.state.movies.length === 0) return <p>No More Movies are Here</p>
    return (
      <div className="container">
        <h2>showing {this.state.movies.length} in Database</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
            
            this.state.movies.map(movie => 
                (<tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
