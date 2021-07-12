import React, { useEffect } from 'react';
// css for max/min-width
import './utils/utility-classes.css';
// Router
import { Route, Switch } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { fetchRawMovies } from './redux/actions/moviesProcessing';
import { fetchRawNews } from './redux/actions/newsProcessing'
// Import pages for router
import Home from './pages/home/Home';
import MoviesPage from './pages/moviesPage/MoviesPage';
import TitlePage from './pages/titlePage/TitlePage'
import News from './pages/news/News';
import NewsPage from './pages/newsPage/NewsPage'
import MyList from './pages/myList/MyList';
import Page404 from './pages/page404/Page404';
//< ThemeProvider and things related to it
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/themes';
// Background
import DarkBackground from './assets/backgroung-img/bg-dark-img.svg'
import LightBackground from './assets/backgroung-img/bg-light-img.svg'
// //* import styled-components
import { AppContainer } from './app.styles';

function App(props) {
  const { fetchRawMovies, fetchRawNews, theme } = props;

  useEffect(() => {
    fetchRawMovies();
    fetchRawNews();
  }, [fetchRawMovies, fetchRawNews])


  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppContainer darkBackground={DarkBackground} lightBackground={LightBackground}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/movies/:filteringRules' component={MoviesPage}/>
          <Route exact path='/title/:id' component={TitlePage}/>
          <Route exact path='/news-list' component={News}/>
          <Route exact path='/news/:id' component={NewsPage}/>
          <Route exact path='/my-list' component={MyList}/>
          <Route path='/page-404' component={Page404} />
          <Route path='*' component={Page404} />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
      theme: state.theme.themeType
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRawMovies: () => { dispatch(fetchRawMovies()) },
    fetchRawNews: () => { dispatch(fetchRawNews()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
