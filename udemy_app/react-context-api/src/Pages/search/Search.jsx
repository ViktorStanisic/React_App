import './Search.css'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList/RecipeList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  console.log(query);
  const url = `http://localhost:3000/recipes?q=${query}`

  const {error, isPending, data: recipe} = useFetch(url)
  return (
    <div>
      <h2 className='page-title'>Recepies including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p>Loading ...</p>}
      {recipe && <RecipeList recipe={recipe} />}

    </div>
  )
}
