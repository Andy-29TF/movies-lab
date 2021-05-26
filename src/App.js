// css for max/min-width and background
import './utils/utility-classes.css';
import './App.css'
// Router
import { Route, Switch} from 'react-router-dom';
// Import pages for router
import Home from './pages/home/Home';
import MoviesPage from './pages/moviesPage/MoviesPage';
import MyList from './pages/myList/MyList';
import News from './pages/news/News';
import Page404 from './pages/page404/Page404'; 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/my-list' component={MyList}/>
        <Route path='/news' component={News}/>
        <Route path='*' component={Page404} />

      </Switch>
    </div>
  );
}

export default App;
