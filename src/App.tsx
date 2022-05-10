import './App.scss';
import { Routes, Route } from 'react-router-dom';
import useTypedSelector from './hooks/useTypedSelector';
import NotFound from './components/NotFound/NotFound';
import Main from './views/Main/Main';
import List from './views/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Favourites from './views/Favourites/Favourites';
import DonateForm from './views/DonateForm/DonateForm';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Admin from './views/Admin/Admin';

const App = () => {
  const { isAuthorized, isAdmin } = useTypedSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        {!isAuthorized && <Route path="/login" element={<SignIn />} />}
        {!isAuthorized && <Route path="/register" element={<SignUp />} />}

        {isAdmin && <Route path="/admin" element={<Admin />} />}

        <Route path="/list" element={<List />} />

        <Route path="/favourites" element={<Favourites />} />

        <Route path="/donate" element={<DonateForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
