import { NavLink} from 'react-router-dom'


const Navbar = () => {
    return(
        <div className="navbar">
            <NavLink to="/"> home </NavLink>                
            <NavLink to="/blogs"> blogs </NavLink>
        </div>
    )
}

export default Navbar