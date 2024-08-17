import { createContext, useContext, useEffect, useState } from "react";

export const ShowsContext = createContext({
    trendingShows: () => { },
    handleClick: () => { }

});



export const ShowsContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [trendingShow, setTrendingShow] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    function trendingShows() {
        const sortedShows = [...data]
            .sort((a, b) => b.rating.average - a.rating.average)
            .slice(0, 20)
        setTrendingShow(sortedShows)
    }



    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");
                const jsonShows = await response.json();
                setData(jsonShows)
                setIsLoading(false)
                console.log(jsonShows)
            } catch (e) {
                console.log(e)
            }
        }
        fetchShows()

    }, []);
    return (
        <ShowsContext.Provider value={{ data, trendingShows, trendingShow, isLoading }}>
            {children}
        </ShowsContext.Provider>
    )


}