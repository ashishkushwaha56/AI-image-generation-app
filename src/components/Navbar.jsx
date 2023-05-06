import React from 'react'
import {Link} from "react-router-dom";
import { Auth } from '../firebase-config';
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {logo} from '../assets';

function Navbar() {

    const [user] = useAuthState(Auth);
    const navigate = useNavigate(Auth);
    const logOut = async ()=>{
        await signOut(Auth);
        navigate('/');
    }

  return (
    <div>
        <header>
            <img src={logo} alt="logo" className="w-28 object-contain" />
            <div className="menu">
                <Link to = '/'className='link'>Home</Link>
                {
                    user && <Link className = 'link' to = {'/generate'}> Generate</Link>
                }
                {
                    user?
                    <div className="link">
                        <div className="d-flex">
                            <div className="d-flex mr-3">
                                      <button onClick={logOut} >
                                          <LogoutIcon />
                                      </button>
                            </div>

                            <div className="d-flex">
                                      <img className="logo"  src={user.photoURL} alt={user.displayName}>
                                      </img>
                            </div>
                            
                                  
                        </div>
                         
                    </div>:
                          <Link to='/login' className='link'>Login</Link>
                }
                
            </div>
        </header>
    </div>
  )
}

export default Navbar