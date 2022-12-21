import './App.css'
import { BrowserRouter, Route, Switch,NavLink,Redirect } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>

        </nav>
      <Switch>
        <Route exact path="/">
          <Home />  
        </Route>
        <Route exact path="/about">
          <About />  
        </Route>
        <Route exact path="/contact">
          <Contact />  
        </Route>
        {/* ako ima id za druga komponenta */}
        <Route exact path="/article/:id">
          <Article />  
        </Route>
        {/* da gi fati site ruti i da go redirect od nepostoecka na home */}
        <Route path="*">
        <Redirect to="/"/> 
        </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App
