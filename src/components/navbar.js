import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <link to='/'>
          <h1>Mongo Blog</h1>
        </link>

      </div>
    </header>
  )
}

export default Navbar;