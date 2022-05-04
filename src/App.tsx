import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Main from './views/Main/Main';
import List from './views/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Favourites from './views/Favourites/Favourites';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/list" element={<List />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
