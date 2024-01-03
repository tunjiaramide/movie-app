import jagun from '../assets/img/jagun_jagun.jpeg';
import { Link } from 'react-router-dom';

function Movie({movie, handleDelete} ) {
  return (
    <div className='movie'>
        <img src={jagun} width="180" height="180" />
        <h4>{movie.title}</h4>
        <p>{movie.desc}</p>
        <button className="delete" onClick={() => handleDelete(movie.id)}>Delete</button>
        <button className="update"><Link to={`/update/${movie.id}`}>Update</Link></button>
    </div>
  )
}

export default Movie