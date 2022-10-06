import { Link } from 'react-router-dom';
import mongoIcon from '../assets/icons/mongo-icon.png';

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <div style={{'display': 'flex'}}>
          <h1>Mongo Blog</h1>
          <Link to='/'>
          <img id="nav-icon" src={mongoIcon} alt="" />
          </Link>
        </div>
        <Link to='/write'>Logging</Link>
      </div>
    </header>
  )
}

export default Navbar;