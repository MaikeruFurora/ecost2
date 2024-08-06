import { Link, Navigate, Outlet } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useStateContext } from '../context/contextProvider'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AuthenticateHooks from '../auth/hooks/AuthenticationHooks';
const DefaultLayout = () => {
    const { token } = useStateContext();
    const { logoutSumbit } = AuthenticateHooks()
    if (!token) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
             
            <div className="drawer">
            {/* <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> */}
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-base-100 w-full shadow-lg">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <DehazeIcon/>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2">Sales Costing</div>
                <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/costing">Costing</Link>
                    </li>
                    <li>
                        <button className='text-red-500' onClick={logoutSumbit} ><PowerSettingsNewIcon sx={{fontSize: 20}}/> Logout</button>
                    </li>
                </ul>
                </div>
                </div>
                <div className="m-5">
                    <Outlet/>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                  <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/costing">Costing</Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
            
    )
}

export default DefaultLayout