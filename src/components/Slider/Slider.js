import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Card.css'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then(
      (res) => res.data).then((response) => setData(response.results))
  }, [])

  // const imagePath = ""
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";


  return (
    <>
    <div className="poster mt-1">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {
               data?.map(e => (
                <>
                      <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${IMGPATH + e.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{e.title}</div>
                  <div className="posterImage__runtime">
                    {e.release_date}
                    <span className="posterImage__rating">
                      {e.vote_average}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{e.overview}</div>
                </div>
                </>
                ))
            }
        </Carousel>
    </div>
    </>
    )
}


export default Slider

