import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
min-height: 100vh;
font-family: inherit;
width:100%;
display:flex;
justify-content:center;
align-items:center;




`
const Sign = styled.div`
background-color: white;
border-radius: 2px;

`
const WelcomeText = styled.h2`
text-align:center;


`

const InputContainer = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:200px;
height:200px;
background-color:ghost-white;
`
const Input = styled.input`
margin: 1rem;
height: 10px;
border-radius: 5px;
border: 1px solid blue;
cursor: pointer;
outline: none;
background-color: #f8f8ff;
padding: 1rem;
width: 100%;

`
const Button = styled.button`
height: 35px;
border-radius: 5px;
border: 1px solid blue ;
outline: none;
color:#f8f8ff;
cursor: pointer;
padding: .5rem;
background-color: blue;
width: 75px;

`
const Home = () => {
  return (
    <Container>
      <Sign>
     <WelcomeText>Sign in</WelcomeText>
     <InputContainer>
     <Input placeholder='Name'/>
     <Input placeholder='Email'/>
     <Button>Submit</Button>
     </InputContainer>
     </Sign>
    </Container>
  )
}
 
export default Home