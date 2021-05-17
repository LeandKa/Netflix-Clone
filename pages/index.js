import { useEffect, useState } from 'react'
import FeaturedMovie from '../components/FeaturedMovie'
import MovieList from '../components/MovieList'
import Api from '../util/api'
import Header from '../components/Header/index'
import Footer from '../components/Footer'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const routes = [
    {name:'Originais Netflix',route:"/tv/popular"},
    {name:'Em alta',route:"/tv/top_rated"},
    {name:'Recomendados para Você',route:"/tv/on_the_air"}
]


const Load = styled.div`
   display:flex;
   align-items: center;
  justify-content: center;
  margin-top:7.0rem;
`

export default function Home() {

    const[movies,setMovies] = useState([])
    const[loading,setLoading] = useState(true);
    const[featured,setFeatured] = useState({})

    useEffect(()=>{
        const urlsAxios = routes.map(({ route }, index) => {
            return Api.get(route);
          });
    
            Promise.all([...urlsAxios])
            .then(result =>{
                const responsesApi = result.map((response, index) => ({
                    id: index,
                    name: routes[index].name,
                    movies: response.data.results,
                  }));
                const movieRandom = Math.floor(Math.random() * 20);  
                setMovies(responsesApi)
                setFeatured(responsesApi[0].movies[movieRandom].id)
                setTimeout(()=> setLoading(false),1000);  
            })
        },[])


  return <>
  {
      loading ? (
        <Load>
            <ReactLoading type={'spin'} color={'red'} height={100} width={175}/>
        </Load>    
      ):(
        <>
        <Header/>
          <FeaturedMovie featured={featured}/>
          {
              movies.map(movie =>(
                <MovieList title={movie.name} key={movie.id} movies={movie.movies}/>
              ))
          }
          <Footer/>
        </>
      )
  }
    </>
}
