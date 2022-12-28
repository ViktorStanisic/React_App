import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import { useTheme } from '../../hooks/useTheme'


export default function Navbar() {
      //za da koristis globalen state
      const { color, changeColor } = useTheme()
      // console.log(changeColor);

      return (
            <div className='navbar' style={{ backgroundColor: color }}>
                  <nav onClick={() => changeColor('green')}>
                        <Link to="/" className='brand'>
                              <h1>Cooking app</h1>
                        </Link>
                        <SearchBar />
                        <Link to="/create">
                              Create Recipe
                        </Link>
                  </nav>
            </div>
      )
}
