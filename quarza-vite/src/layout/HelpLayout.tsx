import { NavLink, Outlet } from 'react-router-dom'
import './help.css'

export default function HelpLayout () {
    return (
        <div className="help">
            <div className="help-layout">
                <h1> help </h1>
                <nav>
                    <NavLink to="./faq"> view faq </NavLink>
                    <NavLink to="./contact"> contact us </NavLink>
                    <NavLink to="./items"> items </NavLink>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}
