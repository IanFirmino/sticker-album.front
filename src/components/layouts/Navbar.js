import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <ul>
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