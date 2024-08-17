import React, { useContext, useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import { ShowsContext } from "../../Context/context"

function Home() {

    const { data, trendingShows, trendingShow } = useContext(ShowsContext)

    useEffect(() => {
        trendingShows()
    }, [data])



    return (

        <div className="body" style={{ marginTop: "125px" }}>
            <div style={{ backgroundColor: "red", height: "70px", paddingTop: "15px", marginBottom: "20px", fontSize: "1.5em" }} class="text-center">
                <HomeHeader />
            </div>


            <div>
                <div class="d-flex flex-row gap-5 justify-content-center flex-wrap">

                    {trendingShow.map((data, index) => (
                        <div class="card-border" key={data.id}  >
                            <div class="card bg-dark text-light div-border">
                                <div class="image-container">
                                    <img src={data.image.medium} class="card-img-top" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{data.name}</h5>
                                    <h5>genres: </h5>
                                    <h6>{data.genres.join(", ")}</h6>
                                    <div class="d-flex flex-row justify-content-between">
                                        <a href="#" class="btn btn-color">comments</a>

                                        <a href="#" class="btn btn-color"><i class="fa-regular fa-heart" style={{ padding: "5px" }}></i>likes</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div >
    )
}

export default Home;