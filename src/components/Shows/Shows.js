import React, { useContext, useEffect } from "react";
import { ShowsContext } from "../../Context/context";


function Shows() {

    const { data, isLoading } = useContext(ShowsContext)


    if (isLoading) {
        return <div style={{ paddingTop: "10%" }}>Loading...</div>
    }


    return (

        <div>
            <div class="d-flex flex-row gap-5 justify-content-center flex-wrap" style={{ paddingTop: "150px", height: "auto" }}>

                {data.map((data, index) => (
                    <div class="card-border" key={data.id} >
                        <div class="card bg-dark text-light div-border" key={data.id} >
                            <div class="image-container">
                                <img src={data.image.medium} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                <h5>genres: </h5>
                                <h6>{data.genres.join(", ")}</h6>

                                <div class="d-flex flex-row justify-content-between">
                                    <a href="#" class="btn btn-color">comments</a>
                                    <a href="#" class="btn btn-color"> <i class="fa-regular fa-heart" style={{ padding: "5px" }}></i>
                                        likes</a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </div>



    )
}

export default Shows;