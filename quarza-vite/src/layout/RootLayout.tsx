import { NavLink, Outlet } from 'react-router-dom'
import './layout.css'

export default function RootLayout () {
    return (
        <> <div className='navbar'>
            <p> quarza </p>
            <div className="search">
                <p> test </p>
            </div>
            <div className='links'>
                <NavLink to="/"> home </NavLink>
                <NavLink to="/blogs"> blogs </NavLink>
                <NavLink to="/help"> help </NavLink>
                <NavLink to="/users"> users </NavLink>
                <NavLink to='/calender'> calender </NavLink>
            </div>
        </div>
        <main>
            <Outlet />
        </main>
    </>
    )
}
