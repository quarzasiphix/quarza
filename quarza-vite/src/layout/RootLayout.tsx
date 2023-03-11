import { NavLink, Outlet } from 'react-router-dom'
import './layout.css'
import { useState } from 'react'

interface NavitemProps {
  to: string;
  children: React.ReactNode;
}

interface NavbuttonProps {
  to: string;
  children: React.ReactNode;
}

interface DropdownItemProps {
  leftIcon?: string;
  rightIcon?: string;
  children: React.ReactNode;
}

interface DropdownProps {
  children: React.ReactNode;
}

interface NavbarProps {
  children: React.ReactNode;
}

export default function RootLayout () {
  return (<>
      <Navbar>
        <Navitem to="/"> home </Navitem>
        <Navitem to="/blogs"> blogs </Navitem>
        <Navitem to="/help"> help </Navitem>
        <Navitem to='/calender'> calender </Navitem>
      </Navbar>
      <main>
        <Outlet />
      </main></>
    )
}

function Navbar(props: NavbarProps) {
  return (
    <nav className="navbar">
      <p> quarza </p>
      <div className="navbar-nav">{props.children}</div>
    </nav>
  )
}

function Navitem(props: NavitemProps) {
  return (
    <>
      <div className="nav">
        <NavLink to={props.to}>{props.children}</NavLink>
      </div>
    </>
  )
}

function Dropdown(props: DropdownProps) {
  function DropdownItem(props: DropdownItemProps) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-buton">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown">
      {props.children}
      <DropdownItem>profile</DropdownItem>
    </div>
  )
}

function Navbutton(props: NavbuttonProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-button">
      <NavLink to={props.to} onClick={() => setOpen(!open)}>
        {props.children}
      </NavLink>
      {open && props.children}
    </div>
  )
}
