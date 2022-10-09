import { Link } from 'react-router-dom';
import mongoIcon from '../assets/icons/mongo-icon.png';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  }

  return (
    <header>
      <div className="container">
        <div style={{'display': 'flex'}}>
          <h1>Mongo Blog</h1>
          <Link to='/'>
          <img id="nav-icon" src={mongoIcon} alt="" />
          </Link>
        </div>
        <nav>
          <div>
            { user 
              ? <button onClick={handleClick} style={{color:"black"}}>return 2 AFK</button>
              : null
            }
            <Link to='/write'>
              {
                user
                  ? 'Write'
                  :'Login'
              }
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;