import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';
import MainApp from './components/MainApp';

function App() {
  return (
    <FavoritesProvider>
      <MainApp />
    </FavoritesProvider>
  );
}



export default App;
