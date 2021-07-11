export const darkTheme = {
    body: {
        background: "dark"
    },
    header: {
        background: "#0A1612",
        navbar: {
            link: {
                color: "#F7F7FF",
                hover: {
                    color: "#060E0B",
                    background: "#F7F7FF"
                }
            },
            searchIcon: {
                fill: "#F7F7FF",
                hover: {
                    fill: "#F7CE3E"
                }
            }
        },
        mobileNavbar: {
            menuIcon: {
                fill: "#F7F7FF"
            },
            searchIcon: {
                fill: "#F7F7FF"
            },
            modal: {
                background: "#0A1612",
                link: {
                    color: "#F7F7FF"
                }
            }
        }
    },
    footer: {
        background: "#0A1612",
        color: "#F7F7FF"
    },
    pages: {
        background: "#243942",
        home: {
            homeRecommendationsSection: {
                carousel: {
                    border: "#060E0B",
                    dropShadow: "#060E0Bbc",
                    frameTitle: "#F7F7FF",
                    movieName: "#F7F7FF",
                    movieYear: "#F7F7FF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#060E0B"
                    }
                },
                topRatedMovie: {
                    border: "#060E0B",
                    dropShadow: "#060E0Bbc",
                    frameTitle: "#F7F7FF",
                    link: "#F7F7FF",
                    movieName: "#F7F7FF",
                    movieStoryline: "#F7F7FF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#060E0B"
                    }
                }
            },
            // ! Latest Movies
            // * AND
            // > Latest News
            homeLatestMoviesSection: {
                border: "#060E0B",
                dropShadow: "#0a1612bc",
                sectionTitle: "#F7F7FF",
                scrollIcon: {
                    fill: "#F7F7FF"
                },
                arrowBtnBg: "#FFD700",
                wrapperContainer: {
                    scrollbarTrack: {
                        boxShadow: "#0000004c",
                        background: "#c5c1c0"
                    },
                    scrollbarThumb: {
                        boxShadow: "#0000004c",
                        background: "#060E0B"
                    }
                }
            }
        },
        moviesPage: {
            moviesList: {
                button: {
                    color: "#060E0B",
                    background: "#F7CE3E",
                    hover: {
                        color: "#F7CE3E",
                        background: "#060E0B"
                    }
                }
            },
            baseListSidebar: {
                color: "#060E0B",
                background: "#F7CE3E",
            }
        },
        myListPage: {
            sectionBar: {
                borderBottom: "#F7CE3E",
                selector: {
                    selected: {
                        background: "#F7F7FF"
                    },
                    unselected: {
                        background: "#c5c1c0",
                        hover: {
                            background: "#060E0B",
                            mobile: {
                                background: "#F7F7FF"
                            }
                        }
                    },
                    wantToSee: {
                        colorAndFill: "#084D9B"
                    },
                    watched: {
                        colorAndFill: "#057657"
                    },
                    loveIt: {
                        colorAndFill: "#E33B57"
                    }
                }
            },
            displaySection: {
                border: "#F7CE3E",
                background: "#0a161281",
                color: "#F7F7FF"
            }
        },
        titlePage: {
            color: "#F7F7FF",
            hero: {
                background: "#141414",
                iconBackground: "#000000",
                saveButtons: {
                    wantToSee: {
                        first: "#F7F7FF",
                        second: "#084D9B",
                        third: "#579be9"
                    },
                    watched: {
                        first: "#F7F7FF",
                        second: "#057657",
                        third: "#42e6ba"
                    },
                    loveIt: {
                        first: "#F7F7FF",
                        second: "#E33B57",
                        third: "#e97e90"
                    }
                },
                imdb: "#FFD700"
            },
            content: {
                border: "#ffff00"
            }
        },
        newsPage: {
            color: "#F7F7FF",
            borderLeftSection: "#ffff00",
            borderBottom: "#060E0B",
            dropShadow: "#060E0Bbc"
        },
        page404: {
            color: "#F7F7FF",
            link: "#ffff00"
        }

    },
    components: {
        movieItem: {
            title: {
                color: "#F7F7FF"
            },
            imdb: {
                rating: "#FFD700",
                star: "#FFD700",
                background: "#060E0B"
            },
            saveButtons: {
                wantToSee: {
                    first: "#F7F7FF",
                    second: "#084D9B",
                    third: "#579be9"
                },
                watched: {
                    first: "#F7F7FF",
                    second: "#057657",
                    third: "#42e6ba"
                },
                loveIt: {
                    first: "#F7F7FF",
                    second: "#E33B57",
                    third: "#e97e90"
                }
            }
        },
        newsItem: {
            title:  "#F7F7FF",
            link: "#F7F7FF"
        },
        messageSlot: {
            background: "#060E0B",
            color: "#F7F7FF",
            spanColor: "#44FFD1"
        },
        baseListSidebar: {
            white: "#F7F7FF",
            black: "#060E0B",
            yellow: "yellow",
            scrollbar: {
                black: "#060e0b",
                yellow: "yellow",
                track: "linear-gradient(90deg, #060e0b 35%, #ffd700 50%, #060e0b 65%)"
            }
        },
        searchBar: {
            container: {
                background: "#0e241c",
                boxShadow: "#000000"
            },
            input: {
                background: "#3d413f",
                color: "#F7F7FF"
            },
            list: {
                background: "#060e0bf8",
                color: "#F7F7FF"
            },
            link: {
                color: "#F7F7FF",
                hoverColor: "yellow"
            }
        }
    }
}

// ${ props => props.theme.pages.titlePage.};