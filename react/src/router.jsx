import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './views/auth/Login';
import NotFound from './views/auth/NotFound';
import Product from './views/product/Product';
import DefaultLayout from './views/layout/DefaultLayout';
import GuestLayout from './views/layout/GuestLayout';
import Costing from './views/costing/CostingComputation';

const route = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/product"/>
            },
            {
                path: "/product",
                element: <Product/>
            },
            {
                path: "/costing",
                element: <Costing/>
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
           
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
   
])

export default route;