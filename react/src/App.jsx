import { RouterProvider } from 'react-router-dom'
import route from './router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store/storeConfig.js';
import Loading from './views/component/Loading.jsx';
const App = () => {

  return (
    <div className='relative'>
        <RouterProvider router={route}/>
        <Loading/>
    </div>
  )
}

export default App
 