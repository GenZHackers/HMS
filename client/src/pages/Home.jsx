import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"



const Home = () => {

  const [news, setNews] = useState([])

  const getFeeds = async ()=>{
    await axios.get(
      `https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=472d945166ef40efadf8196dff58c61b`
    )
    .then((res) => {
      setNews(res.data.articles)
    })
  }

  useEffect(()=>{getFeeds()}, [])
  
  
  return (
    <section>
      <Header>
        <HeadWrapper>
          <div>
            <Greet>Hi Williams</Greet>
            <p>Let's help you book an appointment today</p>
          </div>
          <Profile>
            <img src="https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1" alt="" />
          </Profile>
        </HeadWrapper>
        <Searchbar type="search" placeholder="search" />
      </Header>
      <NewsFeed>
        <NewsHead>Top Health News</NewsHead>
        <div className="feeds">
          {
            news.map((feed, i)=>{
              return(
                <div key={i} className="feed">
                  <img src={feed.urlToImage} alt="" />
                  <h3>{feed.title}</h3>
                  <p>Author : {feed.author}</p>
                </div>
              )
            })
          }
        </div>
      </NewsFeed>
    </section>
  )
}

const Header = styled.header`
  padding: 1rem;
  width: 100%;
`
const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    font-size:12px;
    font-weight: 600;
    padding: 5px 0;
  }
`
const Profile = styled.div`
  border-radius: 50%;
  padding: 0.5rem;

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`

const Greet = styled.div`
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

  .feeds{
    display: grid;
    gap: 40px;
    border-radius: 20px;
    padding: 20px 0;
    

    .feed{
      display: grid;
      gap: 10px;
      background: #FDFEFF;
/* shadow 1 */

      box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
      border-radius: 16px;
      padding-bottom: 20px;

      img{
        width: 100%;
        height: 200px;
        border-radius: 16px;
        object-fit: cover;
        /* Inside auto layout */
      }

      h3{
        font-size: 13px;
        font-weight: 500;
        padding: 0 10px;
      }

      p{
        color: rgb(100,100,100);
        font-size: 12px;
        padding: 0 10px;
      }
    }
  }
`

const NewsHead = styled.p`
  color: #0048b2;
  font-weight: 500;


`
export default Home
