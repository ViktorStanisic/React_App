import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

export default function Navbar() {
      return (
            <div className='navbar'>
                  <nav>
                        <Link to="/" className='brand'>
                              <h1>Cooking app</h1>
                        </Link>
                        <SearchBar/>
                        <Link to="/create">
                              Create Recipe
                        </Link>
                  </nav>
            </div>
      )
}
