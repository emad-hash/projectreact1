import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Card() {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=b57f000f605fd0afe9de5722933e8c52").then(
        (res) => res.data).then((response) => setData(response.results))
    }, [])

    // const imagePath = ""
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        {data?.map(e => {
          return (
            <>
            
            
    <a href="#">
        <img class="rounded-t-lg" src={IMGPATH + e.backdrop_path}  alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.overview}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>

            </>
          )
        })}
      </div>

    );
}


export default Card