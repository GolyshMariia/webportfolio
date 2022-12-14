import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import HomeMyComponent from './components/home/home';
import MyFirstComponent from './components/cv/cv';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const Index: React.FC  = () => {

  const isProduction = window.location.href.includes('golyshmariia.github.io');

  return (
    <React.StrictMode>
      <BrowserRouter basename={isProduction ? 'webportfolio' : ''}>
        <Navbar />
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='example' element={<HomeMyComponent />} />
            <Route path='/first' element={<MyFirstComponent />} />
            <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
