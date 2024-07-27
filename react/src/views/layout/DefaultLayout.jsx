import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
const DefaultLayout = () => {
    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to="/login"/>
    }
    return (
        <div>
            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-base-100 w-full shadow-lg">
                <div className="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </label>
                </div>
                <div className="mx-2 flex-1 px-2">Sales Costing</div>
                <div className="hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                    <Link to="/product"><li><a>Product</a></li></Link>
                    <Link to="/costing"><li><a>Costing</a></li></Link>
                    </ul>
                </div>
                </div>
                <div className="m-5">
                    <Outlet/>
                </div>
            </div>
            {/* <div className="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            </div> */}
            </div>
        </div>
            
    )
}

export default DefaultLayout