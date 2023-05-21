
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { Container} from '@mui/material';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import Header from './components/Header/Header';
import SingleMovie from './pages/SingleMovie/SingleMovie';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' Component={Trending} exact/>
          <Route path='/movies' Component={Movies} />
          <Route path='/series' Component={Series} />
          <Route path='/search' Component={Search} />
          <Route path='/movies/:movieId/:mediaType' Component={SingleMovie} />
        </Routes>
      </Container>
    </div>

      <SimpleBottomNavigation />
    </ BrowserRouter>
  );
}

export default App;
