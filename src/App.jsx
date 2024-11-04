import { useState } from 'react'

import {createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {RouterProvider} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
          <div>
              <Navbar></Navbar>
              <Home></Home>
          </div>
      },
      {
        path:"/about",
        element:
          <div>
            <Navbar></Navbar>
            <About></About>
          </div>
      },
      {
        path:"/skills",
        element:
          <div>
            <Navbar></Navbar>
            <Skills></Skills>
          </div>
      },
      {
        path:"/contact",
        element:
          <div>
            <Navbar></Navbar>
            <Contact></Contact>
          </div>
      }
    ]
  );
  return (
    <>
      <div className="app-display">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
