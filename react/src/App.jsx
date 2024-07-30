import { RouterProvider } from 'react-router-dom'
import route from './router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store/storeConfig.js';
const App = () => {

  return (
    <>
     
        <RouterProvider router={route}/>
    </>
  )
}

export default App
 