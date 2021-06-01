import { useEffect } from 'react';
// css for max/min-width and background
import './utils/utility-classes.css';
import './App.css'
// Router
import { Route, Switch} from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { fetchRawMovies } from './redux/actions/moviesProcessing';
// Import pages for router
import Home from './pages/home/Home';
import MoviesPage from './pages/moviesPage/MoviesPage';
import MyList from './pages/myList/MyList';
import News from './pages/news/News';
import Page404 from './pages/page404/Page404'; 

function App(props) {
  const { fetchRawMovies } = props;

  useEffect(() => {
    fetchRawMovies();
  }, [fetchRawMovies])

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

function mapDispatchToProps(dispatch) {
  return {
    fetchRawMovies: () => { dispatch(fetchRawMovies()) }
  }
}

export default connect(null, mapDispatchToProps)(App);
