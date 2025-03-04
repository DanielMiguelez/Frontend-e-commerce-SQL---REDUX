import React from 'react';
import './App.css';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import Search from './components/Search/Search';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post/:id" element={<PostDetail/>} />
          <Route path="/search/:postName" element={<Search/>} />
          <Route path="/admin" element={<Admin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
