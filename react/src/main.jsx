import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '@context/contextProvider.jsx';
import './index.css';
import './output.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store/storeConfig.js';
import Loading from '@component/Loading.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </ContextProvider>
    </Provider>
  // </React.StrictMode>
);
