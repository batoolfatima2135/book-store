import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Categories from './Routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
