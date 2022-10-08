import { Link } from 'react-router-dom';
import mongoIcon from '../assets/icons/mongo-icon.png';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const logout = useLogout;
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
            <button onClick={handleClick}>return 2 AFK</button>
            <Link to='/write'>Logging</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;