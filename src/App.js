import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Categories from './Routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
