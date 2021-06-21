import { useEffect } from 'react';
// css for max/min-width
import './utils/utility-classes.css';
// Router
import { Route, Switch } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { fetchRawMovies } from './redux/actions/moviesProcessing';
// Import pages for router
import Home from './pages/home/Home';
import MoviesPage from './pages/moviesPage/MoviesPage';
import TitlePage from './pages/titlePage/TitlePage'
import MyList from './pages/myList/MyList';
import News from './pages/news/News';
import Page404 from './pages/page404/Page404';
// Background
import DarkBackground from './assets/backgroung-img/bg-dark-img.svg'
// //* import styled-components
import { AppContainer } from './app.styles';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/themes';

function App(props) {
  const { fetchRawMovies } = props;

  useEffect(() => {
    fetchRawMovies();
  }, [fetchRawMovies])


  return (
    <ThemeProvider theme={darkTheme}>
      {/* <GlobalStyles/> */}
      <AppContainer darkBackground={DarkBackground}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/movies/:filteringRules' component={MoviesPage}/>
          <Route exact path='/title/:id' component={TitlePage}/>
          <Route exact path='/my-list' component={MyList}/>
          <Route exact path='/news' component={News}/>
          <Route path='/page-404' component={Page404} />
          <Route path='*' component={Page404} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRawMovies: () => { dispatch(fetchRawMovies()) }
  }
}

export default connect(null, mapDispatchToProps)(App);
