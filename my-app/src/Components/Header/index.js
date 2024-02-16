import {Link} from "react-router-dom"
import { FaUser } from "react-icons/fa";
//importing third party package for proper authorization
import { useAuth0 } from "@auth0/auth0-react";


import './index.css'

const Header = () =>{
// loginWithRedirect,logout, isAuthenticated,user all are the componets which provide authorization 
    const { loginWithRedirect,logout, isAuthenticated,user } = useAuth0()

    return(
    <nav className="navbar">
        <h2 className='title'>THE <span className="bharat">BHARAT</span></h2>
        <ul className="links">
            <li className="link"><Link to="/" className="link">HOME</Link></li>
            <li className="link"><Link to="/aboutus" className="link">ABOUT US</Link></li>
            <li className="link"><Link to="/contact" className="link">CONTACT</Link></li>
            <li className="link name">
                {isAuthenticated && <p>{user.name}</p>}
            </li>
            <li className="link">
                 {
                    isAuthenticated ? <button className="login-logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>:
                  <button className="login-logout" onClick={() => loginWithRedirect()}>Log In</button>
              
                 }

            </li>
            <li className="link"><Link to="/userprofile" className="link"><FaUser/></Link></li>
        </ul>
    </nav>
    )
}

export default Header