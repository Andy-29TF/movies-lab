import React, {useState, useEffect} from 'react';
// redux
import { connect } from 'react-redux';
//* import the stylized  component
import { SearchBarContainer, SearchBarBox, SearchInput, SearchResultsList } from './searchBar.styles';

function SearchBar(props) {
    const { displaySearchBar, movies } = props;
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ searchResultsList, setSearchResultsList ] = useState([]);

    useEffect(() => {
        setSearchTerm("")
    }, [displaySearchBar])

    useEffect(() => {
        if(displaySearchBar) {
            const moviesFound = movies.filter(elem => {
                if (searchTerm === "" ) {
                    return false
                }else if(elem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return elem
                }else {
                    return false
                }
            }).slice(0, 3)
            setSearchResultsList(moviesFound)
        }
    }, [movies, searchTerm, displaySearchBar])


    

    return (
        <SearchBarContainer displaySearchBar={displaySearchBar} >
            <SearchBarBox className="container-min-max-width">
                <SearchInput type="text" placeholder="Looking for a movie..." onChange={ event => {setSearchTerm(event.target.value)}} value={searchTerm}/>
                <SearchResultsList className="container-min-max-width">
                    {
                        searchResultsList.map( elem => <p key={elem.id}>{elem.name}</p>)
                    }
                </SearchResultsList>
            </SearchBarBox>
        </SearchBarContainer>
    )
}

function mapStateToProps(state) {
    return {
        displaySearchBar: state.searchBar.searchBarIsActivated,
        movies: state.moviesProcessing.rawMovies
    }
}

export default connect(mapStateToProps)(SearchBar);