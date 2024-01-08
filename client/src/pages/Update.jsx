import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Update() {
  const [ movie, setMovie] = useState({
      title: "",
      desc: ""
  })

  const navigate = useNavigate()
  const location = useLocation()
  const hostname = window.location.hostname;

  const movieId = location.pathname.split('/')[2];


  const handleChange = (e) => {
    setMovie(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://${hostname}:5000/movie/${movieId}`, movie)
        navigate('/')
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="addpage">
      <h1>Update movie </h1>
      <div className="form">
        <input type="text" placeholder="title" onChange={handleChange} name="title" />
        <input type="text" placeholder="description" onChange={handleChange} name="desc" />
        <button onClick={handleClick}>Update</button>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Update