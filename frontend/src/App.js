import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import NavBar from './components/NavBar';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import FeedPage from './pages/feedPage';
import AccessDenied from './pages/accesDeniedPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <ProtectedRoute
            errorPage={<AccessDenied />}
            targetPage={<HomePage />}
          />
        } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/feed' element={
          <ProtectedRoute
            errorPage={<AccessDenied />}
            targetPage={<FeedPage />}
          />} />
      </Routes>
    </>
  );
}

export default App;