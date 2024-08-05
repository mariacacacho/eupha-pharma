import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return <div>
        <nav>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout