import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Whatwedo from './pages/Whatwedo.jsx';
import Filter from './pages/Filter.jsx';

function App() {
 return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Filter/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Whatwedo' element={<Whatwedo />} />
        <Route path='/Filter' element={<Filter />} />
      </Routes>
    </BrowserRouter>
    </>
 );
}

export default App;
