import React, {useEffect, useState} from "react"
import './fav.css'
import { Link } from "react-router-dom"

function Fav() {
    const [fav,setfav] = useState([])

    useEffect(() => {
        getlocal()
    }, [])

    const getlocal = () => {
        let storedArray = localStorage.getItem("favmovie");
         let output = JSON.parse(storedArray);
         if(output != null){
            setfav(output)
         }
        }

  return (
    <div>
           {
                        fav.map(movie => (
                            <>

                                    <div className="cards1">
                                   <img className="cards__img1" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
                                   <div className="cards__overlay1">
                                       <div className="card__title1">{movie?movie.original_title:""}</div>
                                       <div className="card__runtime1">
                                           {movie?movie.release_date:""}
                                           <span className="card__rating1">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                                       </div>
                                       <div className="card__description1">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                                   </div>
                               </div>
                                 </>
                                 

                        ))
                    }
    </div>
  )
}



export default Fav