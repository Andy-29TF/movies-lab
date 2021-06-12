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
                    movieName: "#F7F7FF",
                    movieStoryline: "#F7F7FF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#060E0B"
                    }
                }
            },
            homeLatestMoviesSection: {
                border: "#060E0B",
                dropShadow: "#0a1612bc",
                sectionTitle: "#F7F7FF",
                scrollIcon: {
                    fill: "#F7F7FF"
                },
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
        newsPage: {},
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
        messageSlot: {
            background: "#060E0B",
            color: "#F7F7FF",
            spanColor: "#44FFD1"
        }
    }
}