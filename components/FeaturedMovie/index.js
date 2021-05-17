import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Api from '../../util/api';


const Container = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-position: top;
height: 100vh;
`

const FeaturedVertical = styled.div`
width: inherit;
height: inherit;
background: linear-gradient(to top, #111 10%, transparent);
`

const FeaturedHorizontal = styled.div`
width: inherit;
height: inherit;
background: linear-gradient(to right, #111 30%, transparent 70%);
display:flex;
flex-direction:column;
justify-content:center;
padding-left:2.0rem;
margin:0px;
`

const FeaturedName = styled.h1`
  font-size:2.0rem;
  color:white;
  margin-left:3.0rem;
  font-familiy:roboto;
`

const FeaturedInfo = styled.div`
  margin-left:3.0rem;
`
const FeaturedRating = styled.h1`
display:inline-block;
font-size:1.0rem;
font-weight:bold;
 color:${({ theme }) => theme.colors.green};
`

const FeaturedYear = styled.h1`
  display:inline-block;
  margin-left:1.0rem;
  font-size:1.0rem;
  font-weight:bold;
  color:${({ theme }) => theme.colors.gray};
`

const FeaturedSeasons = styled.h1`
  display:inline-block;
  margin-left:1.0rem;
  font-size:1.0rem;
  font-weight:bold;
  color:${({ theme }) => theme.colors.gray};
`
const FeaturedDescription = styled.p`
  display:inline-block;
  max-width:400px;
  margin-top:0px;
  font-weight:bold;
  margin-left:3.0rem;
  color:${({ theme }) => theme.colors.gray};
`
const FeaturedButtons = styled.div`
margin-left:2.0rem;
`;

const Button = styled.a`
  display:inline-block;
  margin-left:1.0rem;
  font-size:1.2rem;
  font-weight:bold;
  margin-right:1.0rem;
  background:${props => props.background};
  border-radius:5%;
  color:${props=> props.color};
  padding:0.9rem;
  transition: all ease 0.3s;
  text-decoration:none;
  &:hover{
      cursor:pointer;
      opacity:0.4;
  }
  @media (max-width: 400px) {
    margin-top:1.0rem;
  }
`;

const FeaturedGenre = styled.div`
    margin-top:1.0rem;
    margin-left:2.0rem;
    span{
        display:inline-block;
        font-weight:bold;
        font-size:18px;
        color:#999;
        margin-left:0.6rem;
    }
`;

export default function FeaturedMovie({featured}) {

    const[movie,setMovie] = useState({})
    const[info,setInfo] = useState({})

    useEffect(()=>{
       Api.get(`/tv/${featured}`)
       .then(result =>{
           const vote = Math.floor(result.data.vote_average * 10)
           const date = result.data.first_air_date.slice(0,-6)
           const genero = result.data.genres.map( (genre) =>genre.name).join(', ')
           setInfo({vote:vote,date:date,genre:genero})
           setMovie(result.data)
       })
    },[])

    return (
        <Container img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} >
            <FeaturedVertical>
                <FeaturedHorizontal>
                    <FeaturedName>{movie.name}</FeaturedName>
                    <FeaturedInfo>
                        <FeaturedRating>{info.vote}% relevante</FeaturedRating>
                        <FeaturedYear>{info.date}</FeaturedYear>
                        <FeaturedSeasons>{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}</FeaturedSeasons>
                    </FeaturedInfo>
                    <FeaturedDescription>{movie.overview}</FeaturedDescription>
                    <FeaturedButtons>
                        <Button color={"#000"} background={"#FFF"}> => Assistir </Button>
                        <Button color={"#FFF"} background={"#333"}> + Minha Lista</Button>
                    </FeaturedButtons>
                    <FeaturedGenre>
                         <span>
                             Gêneros:{info.genre}
                         </span>
                         
                    </FeaturedGenre>
                </FeaturedHorizontal>
            </FeaturedVertical>/
        </Container>
    )
}
