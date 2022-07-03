import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:ghost-white;
height:80px;
width:100%;



`
const WelcomeText = styled.h1`
margin:3rem 0 2rem 0;
`

const InputContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:500px;
 position:absolute;
height:500px;
`
const Home = () => {
  return (
    <Container>
     <WelcomeText>Sign in</WelcomeText>
     <InputContainer>
     </InputContainer>
    </Container>
  )
}
 
export default Home