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
                    border: "#2E4A76",
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
                    border: "#2E4A76",
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
                border: "#2E4A76",
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
                        background: "#8EA8C3"
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
                background: "#474847",
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
        background: "#19171A",
        navbar: {
            link: {
                color: "#FFFFFF",
                hover: {
                    color: "#010101",
                    background: "#FFFFFF"
                }
            },
            searchIcon: {
                fill: "#FFFFFF",
                hover: {
                    fill: "#FCF201"
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
                background: "#19171A",
                link: {
                    color: "#FFFFFF"
                }
            }
        }
    },
    footer: {
        background: "#19171A",
        color: "#FFFFFF"
    },
    pages: {
        background: "#2C2B30",
        home: {
            homeRecommendationsSection: {
                carousel: {
                    border: "#45433E",
                    dropShadow: "#010101bc",
                    frameTitle: "#FFFFFF",
                    movieName: "#FFFFFF",
                    movieYear: "#FFFFFF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#010101"
                    }
                },
                topRatedMovie: {
                    border: "#45433E",
                    dropShadow: "#010101bc",
                    frameTitle: "#FFFFFF",
                    link: "#FFFFFF",
                    movieName: "#FFFFFF",
                    movieStoryline: "#FFFFFF",
                    imdb: {
                        rating: "#FFD700",
                        star: "#FFD700",
                        background: "#010101"
                    }
                }
            },
            // ! Latest Movies
            // * AND
            // > Latest News
            homeLatestMoviesSection: {
                border: "#45433E",
                dropShadow: "#010101bc",
                sectionTitle: "#FFFFFF",
                scrollIcon: {
                    fill: "#FFFFFF"
                },
                arrowBtnBg: "#FCF201",
                wrapperContainer: {
                    scrollbarTrack: {
                        boxShadow: "#9597944c",
                        background: "#959794"
                    },
                    scrollbarThumb: {
                        boxShadow: "#0101014c",
                        background: "#010101"
                    }
                }
            }
        },
        moviesPage: {
            moviesList: {
                button: {
                    color: "#010101",
                    background: "#FCF201",
                    hover: {
                        color: "#FCF201",
                        background: "#010101"
                    }
                }
            },
            baseListSidebar: {
                color: "#010101",
                background: "#FCF201",
            }
        },
        myListPage: {
            sectionBar: {
                borderBottom: "#FCF201",
                selector: {
                    selected: {
                        background: "#FFFFFF"
                    },
                    unselected: {
                        background: "#C1C2C1",
                        hover: {
                            background: "#010101",
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
                border: "#FCF201",
                background: "#95979424",
                color: "#FFFFFF"
            }
        },
        titlePage: {
            color: "#FFFFFF",
            hero: {
                color: "#FFFFFF",
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
                border: "#FCF201"
            }
        },
        newsPage: {
            color: "#FFFFFF",
            textDecorationColor: "#45433E",
            borderLeftSection: "#FCF201",
            borderBottom: "#010101",
            dropShadow: "#010101bc"
        },
        page404: {
            color: "#FFFFFF",
            link: "#FCF201"
        }

    },
    components: {
        movieItem: {
            title: {
                color: "#FFFFFF"
            },
            imdb: {
                rating: "#FFD700",
                star: "#FFD700",
                background: "#010101"
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
            title:  "#FFFFFF",
            link: "#FFFFFF"
        },
        messageSlot: {
            background: "#060E0B",
            color: "#FFFFFF",
            spanColor: "#44FFD1"
        },
        baseListSidebar: {
            white: "#FFFFFF",
            black: "#010101",
            iconFill: "#FCF201",
            linkColor: "#FCF201",
            scrollbar: {
                black: "#010101",
                secColor: "#FCF201",
                track: "linear-gradient(90deg, #060e0b 35%, #ffd700 50%, #060e0b 65%)"
            }
        },
        searchBar: {
            container: {
                background: "#3B3A41",
                boxShadow: "#010101"
            },
            input: {
                background: "#CBCDCB",
                color: "#010101"
            },
            list: {
                background: "#010101f8",
                color: "#FFFFFF"
            },
            link: {
                color: "#FFFFFF",
                hoverColor: "#FCF201"
            }
        },
        toggleThemeBtn: {
            toggleBorder: '#FFFFFF',
            gradient: "linear-gradient(#091236, #1E215D)"
        }
    }
}