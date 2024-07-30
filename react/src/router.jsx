import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react';

const DefaultLayout = lazy(() => import('./views/layout/DefaultLayout'))
const GuestLayout   = lazy(() => import('./views/layout/GuestLayout'))
const Login         = lazy(() => import('./views/auth/Login'))
const NotFound      = lazy(() => import('./views/auth/NotFound'))
const Product       = lazy(() => import('./views/product/Product'))
const Costing       = lazy(() => import('./views/costing/CostingComputation'))

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