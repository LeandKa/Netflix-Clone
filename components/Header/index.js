import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  display:flex;
  flex-direction:row;
  position:fixed;
  z-index:999;
  top:0;
  right:0;
  left:0;
  bottom:0;
  height:50px;
  justify-content:space-between;
  padding:1.0rem;
  background: ${ props => (props.change ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  transition:  all ease 0.5s;
`
const List = styled.ul`
  font-size:1.4rem;
  color:white;
  font-weight:bold;
  margin-top:0.6rem;
  img{
   display:inline-block;
   margin-left:3.0rem;
   width:22px;
   cursor:pointer;
   transition:  all ease 0.5s;
   @media (max-width: 450px) {
    margin-left:1.0rem;
  }
  }
  
`

export default function Header() {

    const[navbar,setNavBar] = useState(false);

    const changeBackground = () =>{

        if(window.scrollY >= 80){
          setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <Container change={navbar}>
            <Image src="/netflix.png" alt="logo"  width="150" height="64"/>
            <List>
               <img src="/clipart742441.png"/>
               <img src="/giftbox.svg"/>
               <img src="/man.svg"/>
            </List>
        </Container>
    )
}
