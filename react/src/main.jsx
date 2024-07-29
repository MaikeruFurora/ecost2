import React,{Suspense}  from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './output.css'
import route from './router.jsx'
import { ContextProvider } from './views/context/contextProvider.jsx'
import Loading from "./views/component/Loading.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={route}/>
      </Suspense>
    </ContextProvider>
  </React.StrictMode>
)
