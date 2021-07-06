import React, {useState, useEffect} from 'react';
// redux
import { connect } from 'react-redux';
import { setTheSearchedTermFromSearchBar } from '../../redux/actions/searchBar';
// router
import { Link } from 'react-router-dom';
//* import the stylized  component
import { SearchBarContainer, SearchBarBox, SearchInput, SearchResultsList, ItemSearched, LinkToSearchedItems } from './searchBar.styles';

function SearchBar(props) {
    const { displaySearchBar, movies, setTheSearchedTermFromSearchBar } = props;
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ searchResultsList, setSearchResultsList ] = useState([]);
    
    const createMarkup = html => {
        return { __html : html }
    }

    useEffect(() => {
        setSearchTerm("")
    }, [displaySearchBar])

    useEffect(() => {
        if( displaySearchBar && searchTerm.length > 0) {
            const moviesFound = movies.filter(elem => {
                const elemTitleAndYear= `${elem.name} ${elem.year}`;
                if(elemTitleAndYear.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return elem
                }else {
                    return false
                }
            })
            setSearchResultsList(moviesFound)
        }else if (searchTerm.length <= 0 ) {
            setSearchResultsList([])
        }
    }, [movies, searchTerm, displaySearchBar])


    

    return (
        <SearchBarContainer displaySearchBar={displaySearchBar} >
            <SearchBarBox className="container-min-max-width">
                <SearchInput type="text" placeholder="Looking for a movie..." onChange={ event => {setSearchTerm(event.target.value)}} value={searchTerm}  />
                <SearchResultsList className="container-min-max-width">
                    {
                        searchResultsList.slice(0, 3).map( elem => {
                            const elemTitleAndYear= `${elem.name} (${elem.year})`
                            const titleAndYearHighlighted = elemTitleAndYear.replace(
                                new RegExp (searchTerm, 'gi'),
                                match => `<mark style="background: #FFD700; color: #060E0B; padding: 0;">${match}</mark>`
                            )
                            return (
                                <Link to={`/title/${elem.id}`} key={elem.id}>
                                    <ItemSearched >
                                            <img src={elem.poster} alt={elem.name}/>
                                            <p dangerouslySetInnerHTML={createMarkup(titleAndYearHighlighted)}></p>
                                    </ItemSearched>
                                </Link>
                            )
                        })
                    }
                    {
                        searchResultsList.length > 3 && <LinkToSearchedItems>
                                <Link  
                                    to="/movies/searched-term" 
                                    onClick={() => setTheSearchedTermFromSearchBar({searchedTerm: searchTerm})} 
                                >
                                    {`and ${searchResultsList.length - 3} more movies...`}
                                </Link>
                            </LinkToSearchedItems>
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

function mapDispatchToProps(dispatch) {
    return {
        setTheSearchedTermFromSearchBar: (payload) => dispatch(setTheSearchedTermFromSearchBar(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);