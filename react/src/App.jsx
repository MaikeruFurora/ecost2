import React, { lazy } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./views/layout/Navigation.jsx";
import Loading from "@component/Loading.jsx";
const Login             = lazy(() => import('./views/pages/auth/Login'));
const Product           = lazy(() => import('./views/pages/product/Product'));
const Truck             = lazy(() => import('./views/pages/truck/Truck.jsx'));
const Costing           = lazy(() => import('./views/pages/costing/CostingComputation'));
const Matrix            = lazy(() => import('./views/pages/matrix/Matrix'));
const Warehouse         = lazy(() => import('./views/pages/warehouse/Warehouse'));
const Destination   = lazy(() => import('./views/pages/destination/Destination'));
const DestinationDetails= lazy(() => import('./views/pages/destination-details/Destination-details'));
const TaxCode           = lazy(() => import('./views/pages/taxcode/TaxCode'));
const Form              = lazy(() => import('./views/pages/form/Form'));
const NotFound          = lazy(() => import('./views/pages/auth/NotFound'));
const GuestLayout       = lazy(() => import('./views/layout/GuestLayout'));

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  palette: {
    primary: {
      main: '#396920', // Blue color
    },
    secondary: {
      main: '#186869', 
    },
    danger: {
      main: '#D32F2F',  // Red color
    },
  },
});

export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <Loading/>
      <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Navigate to="/product" />} />
            <Route path="/product" element={<Product />} />
            <Route path="/trucking-matrix" element={<Matrix />} />
            <Route path="/costing" element={<Costing />} />
            <Route path="/truck" element={<Truck />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/form" element={<Form />} />
            <Route path="/taxcode" element={<TaxCode />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/destinationdetail" element={<DestinationDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<GuestLayout/>}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}