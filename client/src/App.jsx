import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Add from './pages/Add';
import Update from './pages/Update';
import "./App.css";

function App() {
  return (
    <div className="app">
          <Routes>
            <Route path="/" element={<Movies />}/>
            <Route path="/add" element={<Add />}/>
            <Route path="/update/:id" element={<Update />}/>
          </Routes>
    </div>
  )
}

export default App
