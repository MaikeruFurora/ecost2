import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './output.css'
import route from './router.jsx'
import { ContextProvider } from './views/context/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={route}/>
    </ContextProvider>
  </React.StrictMode>
)
