import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import FeedPage from './pages/feedPage';
import AccessDenied from './pages/accesDeniedPage';
import ProtectedRoute from './ProtectedRoute';
import React from 'react';
import UnknownPage from './pages/UnknowPage';
import CreatePost from './pages/CreatePost';
import { PostProvider } from './context/PostsContext';

function App() {
  return (
    <>
        <PostProvider>
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
            <Route path='/createPost' element={<CreatePost />} />
            <Route path='/*' element={<UnknownPage />} />
          </Routes>
        </PostProvider>
    </>
  );
}

export default App;