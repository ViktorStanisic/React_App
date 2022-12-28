import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/home/Home'
import Create from './Pages/create/Create'
import Recipe from './Pages/recipe/Recipe'
import Search from './Pages/search/Search'
import Navbar from './components/navbar/Navbar';
import ThemeSelector from './components/ThemeSelector/ThemeSelector'
import { useTheme } from './hooks/useTheme';


function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create" >
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
