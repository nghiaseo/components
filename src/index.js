import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import {Home} from './pages/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    <Route path='login' element={<App></App>}></Route>
    </Routes>
    </BrowserRouter>
);

