import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/404' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
