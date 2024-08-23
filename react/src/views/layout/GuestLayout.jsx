import { Outlet,Navigate } from 'react-router-dom'
import { useStateContext } from '@context/contextProvider'
import { Box } from '@mui/material';
const GuestLayout = () => {
    const {token} = useStateContext()
    if (token) {
        return <Navigate to="/product"/>
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 2,
            }}
        >
        <Outlet/>
    </Box>
    )
}
export default GuestLayout


