import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Intro from './pages/docs/Intro'
import Documentation from './pages/Documentation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:"/docs",
    element:<Documentation/>,
    children:[
      {
        path:'intro',
        element:<Intro/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
