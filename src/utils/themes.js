export const lightTheme = {
    body: {
        background: "light"
    },
    header: {
        background: "#77A6F7",
        navbar: {
            link: {
                color: "#FFFFFF",
                hover: {
                    color: "#1C2222",
                    background: "#D3E3FC"
                }
            },
            searchIcon: {
                fill: "#FFFFFF",
                hover: {
                    fill: "#1C2222"
                }
            }
        },
        mobileNavbar: {
            menuIcon: {
                fill: "#FFFFFF"
            },
            searchIcon: {
                fill: "#FFFFFF"
            },
            modal: {
                background: "#77A6F7",
                link: {
                    color: "#FFFFFF"
                }
            }
        }
    },
    footer: {
        background: "#77A6F7",
        color: "#FFFFFF"
    },
    pages: {
        background: "#FFFFFF",
        home: {
            homeRecommendationsSection: {
                carousel: {
                    border: "#0D5DE7",
                    dropShadow: "#1C222288",
                    frameTitle: "#0A0A0A",
                    movieName: "#FFFFFF",
                    movieYear: "#FFFFFF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#060E0B"
                    }
                },
                topRatedMovie: {
                    border: "#0D5DE7",
                    dropShadow: "#1C222288",
                    frameTitle: "#1C2222",
                    link: "#0A0A0A",
                    movieName: "#0A0A0A",
                    movieStoryline: "#0A0A0A",
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
                border: "#0D5DE7",
                dropShadow: "#1C222277",
                sectionTitle: "#0A0A0A",
                scrollIcon: {
                    fill: "#D3E3FC"
                },
                arrowBtnBg: "#FFCCBC",
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
                    color: "#1C2222",
                    background: "#FFCCBC",
                    hover: {
                        color: "#FFCCBC",
                        background: "#0A0A0A"
                    }
                }
            },
            baseListSidebar: {
                background: "#FFCCBC",
            }
        },
        myListPage: {
            sectionBar: {
                borderBottom: "#003D37",
                selector: {
                    selected: {
                        background: "#1C2222"
                    },
                    unselected: {
                        background: "#D3E3FC",
                        hover: {
                            background: "#0A0A0A",
                            mobile: {
                                background: "#FFFFFF"
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
                border: "#003D37",
                background: "#D3E3FC81",
                color: "#1C2222"
            }
        },
        titlePage: {
            color: "#1C2222",
            hero: {
                color: "#FFFFFF",
                background: "#D3E3FC",
                mobileBackground: "#1C2222",
                iconBackground: "#0A0A0A",
                saveButtons: {
                    wantToSee: {
                        first: "#FFFFFF",
                        second: "#084D9B",
                        third: "#579be9"
                    },
                    watched: {
                        first: "#FFFFFF",
                        second: "#057657",
                        third: "#42e6ba"
                    },
                    loveIt: {
                        first: "#FFFFFF",
                        second: "#E33B57",
                        third: "#e97e90"
                    }
                },
                imdb: "#FFD700"
            },
            content: {
                border: "#FFCCBC"
            }
        },
        newsPage: {
            color: "#1C2222",
            textDecorationColor: "#D3E3FC",
            borderLeftSection: "#FFCCBC",
            borderBottom: "#1C2222",
            dropShadow: "#1C2222bc"
        },
        page404: {
            color: "#1C2222",
            link: "#FFCCBC"
        }

    },
    components: {
        movieItem: {
            title: {
                color: "#1C2222"
            },
            imdb: {
                rating: "#FFD700",
                star: "#FFD700",
                background: "#0A0A0A"
            },
            saveButtons: {
                wantToSee: {
                    first: "#FFFFFF",
                    second: "#084D9B",
                    third: "#579be9"
                },
                watched: {
                    first: "#FFFFFF",
                    second: "#057657",
                    third: "#42e6ba"
                },
                loveIt: {
                    first: "#FFFFFF",
                    second: "#E33B57",
                    third: "#e97e90"
                }
            }
        },
        newsItem: {
            title:  "#1C2222",
            link: "#1C2222"
        },
        messageSlot: {
            background: "#060E0B",
            color: "#FFFFFF",
            spanColor: "#44FFD1"
        },
        baseListSidebar: {
            white: "#FFFFFF",
            black: "#060E0B",
            iconFill: "#FFCCBC",
            linkColor: "#FFCCBC",
            scrollbar: {
                black: "#060e0b",
                secColor: "#FFCCBC",
                track: "linear-gradient(90deg, #060e0b 35%, #FFCCBC 50%, #060e0b 65%)"
            }
        },
        searchBar: {
            container: {
                background: "#D3E3FC",
                boxShadow: "#0A0A0A"
            },
            input: {
                background: "#374343",
                color: "#FFFFFF"
            },
            list: {
                background: "#D3E3FCf8",
                color: "#1C2222"
            },
            link: {
                color: "#1C2222",
                hoverColor: "#003D37"
            }
        },
        toggleThemeBtn: {
            toggleBorder: '#FFFFFF',
            gradient: "linear-gradient(#39598A, #79D7ED)"
        }
    }
}

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
                color: "#F7F7FF",
                background: "#141414",
                mobileBackground: "#141414",
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
            textDecorationColor: "#c5c1c0",
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
            iconFill: "yellow",
            linkColor: "yellow",
            scrollbar: {
                black: "#060e0b",
                secColor: "yellow",
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
        },
        toggleThemeBtn: {
            toggleBorder: '#F7F7FF',
            gradient: "linear-gradient(#091236, #1E215D)"
        }
    }
}