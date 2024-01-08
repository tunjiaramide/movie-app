import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Movie from '../component/Movie';

function Movies() {
  const [ Movies, setMovies] = useState([]);
  const hostname = window.location.hostname;

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await axios.get(`http://${hostname}:5000/movies`)
        setMovies(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllMovies()
  },[])

  const handleDelete = async(id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/movie/${id}`);
      window.location.reload();
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='container'>
      <h2>Year 2023</h2>
      <h1>Favourite movies/series to watch</h1>
      <div className='movies'>
        {/* {Movies.map(movie => (
          <Movie movie={movie} key={movie.id} handleDelete={handleDelete} />
        ))} */}
        { (Movies.length > 0) ? Movies.map(movie => <Movie movie={movie} key={movie.id} handleDelete={handleDelete}  />) : "No movies yet, please add a movie!!!" }
      </div>
      <button className="add"><Link to="/add">Add movie</Link> </button>
    </div>
  )
}

export default Movies