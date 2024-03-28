import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Teachers } from './pages/Teachers.jsx'

const router = createBrowserRouter([
  {
    path: "/LearnLingo/",
    element: <App />,
    children: [
      {
      path: "/LearnLingo/",
      element: <Home />
      },
      {
      path: "/LearnLingo/teachers",
      element: <Teachers />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
