import React from "react"
import styled from "styled-components"
import axios from "axios"

let newsArray
axios
  .get(
    `https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=472d945166ef40efadf8196dff58c61b`
  )
  .then((res) => {
    newsArray = res.data.articles
    console.log(newsArray)
  })

const Home = () => {
  return (
    <section>
      <Header>
        <HeadWrapper>
          <div>
            <Greet>Hi Williams</Greet>
            <h4>Let's help you book an appointment today</h4>
          </div>
          <Profile>CX</Profile>
        </HeadWrapper>
        <Searchbar type="search" placeholder="search" />
      </Header>
      <NewsFeed>
        <NewsHead>Top Health News</NewsHead>
      </NewsFeed>
    </section>
  )
}

const Header = styled.header`
  padding: 1rem;
  font-family: "Inter";
`
const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Profile = styled.div`
  border-radius: 50%;
  background-color: #d9d9d9;
  border: 1px solid black;
  padding: 0.5rem;
`

const Greet = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #0048b2;
`
const Searchbar = styled.input`
  width: 100%;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
  width: 100%;
  border: unset;
  padding-left: 1rem;
  height: 36px;
  background: #f5f5f5;
  border-radius: 1.2rem;
`
const NewsFeed = styled.div`
  margin: 0.5rem;
`

const NewsHead = styled.p`
  color: #0048b2;
  font-weight: 500;
`
export default Home
