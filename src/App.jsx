import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

function App() {

  return (
    <>
    <div>emotion-diary</div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diary/:id' element={<Diary />} />
      <Route path='/new' element={<New />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    </>
  )
}

export default App