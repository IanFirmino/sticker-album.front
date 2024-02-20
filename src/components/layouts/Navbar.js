import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return (
        <ul className='header'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/album">Album</Link>
          </li>
        </ul>
    )
}

export default Navbar;