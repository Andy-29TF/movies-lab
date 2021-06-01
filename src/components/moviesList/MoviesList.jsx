import React, {useState, useEffect} from 'react';
// import components
import MovieItem from '../movieItem/MovieItem'
//* import the stylized  component
import { MoviesListContainer } from './moviesList.styles';


function MoviesList(props) {
    const [moviePackage, setMoviePackage] = useState([]);
    const [visibleItems, setVisibleItems] = useState(18);

    const showMoreMovies = () => {
        setVisibleItems(prevValue => prevValue + 12);
    }

    useEffect(() => {
        const moviesData = props.rawMovies.reverse();
        setMoviePackage(moviesData);
      }, [props]);

    return (
        <MoviesListContainer>
                {
                    moviePackage.length > 0 && moviePackage.slice(0, visibleItems).map( elem => <MovieItem individualMovie={elem} key={elem.id}/>)
                }
                {
                    moviePackage.length >= visibleItems  && <button onClick={showMoreMovies}>Load more...</button>
                }
        </MoviesListContainer>
    )
}

export default MoviesList;
