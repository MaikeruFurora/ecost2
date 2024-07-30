import React,{Suspense}  from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './views/context/contextProvider.jsx'
import Loading from './views/component/Loading.jsx'
import './index.css'
import './output.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import route from './router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store/storeConfig.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Suspense fallback={<Loading/>}>
          <App/>
        </Suspense>
      </ContextProvider>
     </Provider>
  </React.StrictMode>
)
