import React from "react";

function SearchResult({ searchResult = []}) {

  return (

    <div class="d-flex flex-row gap-5 justify-content-center flex-wrap searchresult">
      {searchResult.length > 0 ? (searchResult.map((item) => (
        <div class="card-border" key={item.id}  >
          <div class="card bg-dark text-light div-border">
            <div class="image-container">
              <img src={item.image.medium} class="card-img-top" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <h5>genres: </h5>
              <h6>{item.genres.join(", ")}</h6>
              <div class="d-flex flex-row justify-content-between">
                <a href="#" class="btn btn-color">comments</a>
                <a href="#" class="btn btn-color"><i class="fa-regular fa-heart" style={{ padding: "5px" }}></i>likes</a>
              </div>
            </div>
          </div>
        </div>

      ))) :
        <p style={{ paddingTop: "30%" }}>no results found</p>
      }
    </div>

  );
}

export default SearchResult;