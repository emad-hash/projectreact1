import React, {useEffect, useState} from "react"
import "./movieList.css"
// import { useParams } from "react-router-dom"
import Cards from "../card/card"
import Search from "../../Search"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const [newList , setNewList] = useState([])
    const [search , setSearch] =useState("")
    // const {type} = useParams()
   

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     getData()
    // }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results);
            setMovieList(data.results)
            setNewList(data.results)
        })
    }

    useEffect(()=>{
        let  arr =[];
        arr= movieList?.filter(e=>{
            return e.title.toLowerCase().includes(search.toLowerCase());
        })
        setNewList(arr);
    },[search])

    return (
        <div className="movie__list">
           <Search setSearch={setSearch}/>
            {/* <h2 className="list__title">{(type ? type : "").toUpperCase()}</h2> */}
            <div className="list__cards">
                {
                    newList?.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList