import { useState } from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Footer from './components/Footer'
import Loyout from './pages/Loyout'
import Servirces from './pages/Servirces'




const router = createBrowserRouter ([
  {
    path: '/',
    element: <Loyout />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: '/',
        element: <Hero />
    
      },
      {
        path: '/about',
        element: <About />
    
      },
      {
        path: '/servirces',
        element: <Servirces />
    
      },
      
 
    ]
  }, 
  



])
function App() {
  

  return (
    <>
    <RouterProvider router={router} />
   
    
    </>
  )
}

export default App
