import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Add() {
  const [ movie, setMovie] = useState({
      title: "",
      desc: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setMovie(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/movies', movie)
        navigate('/')
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="addpage">
      <h1>Add movie </h1>
        <div className="form">
          <input type="text" placeholder="title" onChange={handleChange} name="title" />
          <input type="text" placeholder="description" onChange={handleChange} name="desc" />
          <button onClick={handleClick}>Add</button>
        </div>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Add