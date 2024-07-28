import { Outlet,Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
const GuestLayout = () => {
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/product"/>
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Outlet/>
        </div>
    )
}
export default GuestLayout


