import React, {useState,useContext,useEffect } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Search from '../Search/Search';
import SearchResult from '../SearchResults/SearchResults';
import Home from '../Home/Home';
import { ShowsContext } from '../../Context/context';



function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
 

  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState("") 
  const {data} = useContext(ShowsContext);

  function handleSearch(input){
   if(input.trim() !== ""){
  const show = data.filter((shows) =>(
      shows.name.toLowerCase().includes(input.toLowerCase()))
    )
    setIsSearching(true)
    
    setSearchResult(show)
    navigate("/search-result") 
    console.log(searchResult)
    setError('')
   }else{
     setIsSearching(false)
     setSearchResult([])
     navigate("/")
     setError("please enter the show name")
     
    // console.log(searchResult)
   }
  }


  function handleHomeClick(){
    // localStorage.clear();
    setIsSearching(false);
    setSearchResult([]);
    navigate("/")
    setError("")
  }
  function handleShowClick(){
    // localStorage.clear();
    setIsSearching(false);
    setSearchResult([])
    navigate("/Shows");
    setError("")
  }
  


      
     return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img className="logo_img" src='https://images-platform.99static.com//bZmVsjmOQOmfy0EdgqbZAYO10s8=/250x0:1250x1000/fit-in/500x500/99designs-contests-attachments/51/51166/attachment_51166299' />

        </a>
        <span className='wakeup'>WakeUp <br /> Shows</span>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item pe-5 ">
              <Link class={`nav-item nav-link text-light ${location.pathname === "/" ? "active" : ""}`}to="" aria-current="page" onClick={handleHomeClick}>Home</Link>
            </li>
            <li class="nav-item pe-5">
              <Link class={`nav-link text-light ${location.pathname === "/shows" ? "active" : ""}`} to="/shows" role="button" aria-expanded="false" onClick={handleShowClick}>
                Shows
              </Link>
              
            </li>
          </ul>
        </div>
        
       <Search handleSearch ={handleSearch} error={error} setError={setError}/>
      </div>
      
    </nav>
    {isSearching ? (<SearchResult searchResult={searchResult} />) : 
                  (location.pathname === "/" && <Home />)
  
   }

</>
  )
}

export default Navbar