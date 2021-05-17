import React,{useState} from 'react'
import styled from 'styled-components'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'


const Container = styled.div`
display: flex;
flex-direction: column;
padding: 15px 35px 0;
position: relative;
top:-100px;
overflow-x: hidden;
overflow-y: hidden;
@media (max-width: 400px) {
    top:-70px;
  }
  @media (max-width: 345px) {
    top:70px;
  }
  @media (max-width: 329px) {
    top:80px;
  }
  
`
const Title = styled.h2`
  color:white;
  margin-left:1.0rem;
  font-family:roboto;
  font-size:2.0rem;
  margin-bottom:0;
  margin-top:0;
`;



const MovieRowLeft = styled.div`
  position:absolute;
  width:40px;
  top:70px;
  left:0;
  height:270px;
  background-color:rgba(0,0,0,0.6);
  z-index:99;
  display:flex;
  cursor:pointer;
  opacity:0;
  transition:all ease 0.2s;

`

const MovieRowRight = styled.div`
position:absolute;
  width:40px;
  top:70px;
  right:0;
  height:270px;
  background-color:rgba(0,0,0,0.6);
  z-index:99;
  display:flex;
  cursor:pointer;
  opacity:0;
  transition:all ease 0.2s;
`

const ContentMovie = styled.div`
   display:flex;
   flex-direction:row;
   align-items:stretch;
   transition:all ease 0.2s;
   &:hover ${MovieRowLeft} {
    opacity:1;
  }
  &:hover ${MovieRowRight}{
      opacity:1;
  }
`


const Movie = styled.div`
   position:relative;
   height:auto;
   width:300px;

   img{
       position:relative;
       z-index:5;
       width:200px;
       transform:scale(0.9);
       transition:all ease 0.6s;

       &:hover{
           transform:scale(1);
       }
   }
`

export default function MovieList({title,movies}) {

    const [scrollX,setScrollX] = useState(0);


    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = movies.length * 150;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }


    return (
        <Container>
        <Title>{title}</Title>   
        <ContentMovie style={{marginLeft:scrollX,width:movies.length * 150}}>
        <MovieRowLeft onClick={handleLeftArrow}>
            <NavigateBeforeIcon style={{fontSize:50,color:"white",marginTop:"100px"}}/>
        </MovieRowLeft>
            
         <MovieRowRight onClick={handleRightArrow}> 
           <NavigateNextIcon style={{fontSize:50,color:"white",marginTop:"100px"}}/>    
         </MovieRowRight>
            {
                movies.map(movie =>(
                    <Movie key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    </Movie>
                ))
            }             
      </ContentMovie>
      </Container>
    )
}
