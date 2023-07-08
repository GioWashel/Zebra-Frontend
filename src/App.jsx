import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login'
import { Signup} from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Signup/>} path='/signup'></Route>
        <Route element={<Dashboard/>} path='/dashboard'></Route>
        <Route element={<NotFound/>} path='/*'/>
        <Route element={<NotFound/>} path='/notfound'/>

      </Routes>
    </div>
        
  );
}

export default App
