import { useState } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quotes from './pages/Quotes'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><SideNav/> <Home/></>
    },
    {
      path: "/quotes",
      element: <><SideNav/> <Quotes/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
