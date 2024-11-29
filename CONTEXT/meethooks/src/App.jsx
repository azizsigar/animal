import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';
import MainApp from './components/MainApp';
import LikedUsers from './components/LikedUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <FavoritesProvider>
      <>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/liked" element={<LikedUsers />} />
      </Routes>
    </Router>
      </>

    </FavoritesProvider>
  );
}



export default App;
