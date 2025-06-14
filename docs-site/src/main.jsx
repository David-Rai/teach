import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:"/documentation",
    element:<Documentation/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
