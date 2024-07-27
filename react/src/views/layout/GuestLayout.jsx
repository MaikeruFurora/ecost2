import { Outlet,Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
const GuestLayout = () => {
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/product"/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default GuestLayout


