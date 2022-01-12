import React, { useContext, useState } from 'react';
import {movieData} from './MovieContext';

function AddMovie(props) {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movie,setMovies] = useContext(movieData);

    const handleChange = (name,value) => {
            name(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!id || !name || !price) return alert("Please fill all fields");

        setMovies(preMovies => [...preMovies,{id,name,price}]);

    }
    return (
        <div>
            <input placeholder='id' value={id} onChange={(e) => handleChange(setId,e.target.value)} />
            <input placeholder='name' value={name} onChange={(e) => handleChange(setName,e.target.value)} />
            <input placeholder='price' value={price} onChange={(e) => handleChange(setPrice,e.target.value)} />
            <button type='submit' onClick={(e) => onSubmit(e)}>Submit</button>
        </div>
    );
}

export default AddMovie;