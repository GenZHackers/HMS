import React from "react"
import styled from "styled-components"
import {FaArrowLeft} from "react-icons/fa"

const Container = styled.div`
  padding: 10px 10px 100px;

  .return{

  }

  .bio-data{
    display: grid;
    gap: 10px;
    background: #FFFFFF;
    /* shadow 1 */

    box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
    border-radius: 16px;
    padding: 20px;
    width: 80%;
    margin: 10px auto;

    .data{
      display: grid;
    }

    .key{
      text-align: center;
      font-size: 12px;
      color: rgb(150,150,150);
    }

    .value{
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      color: #0048b2;
    }

  }

  .profile{
    display: grid;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    
      img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #0048b2;
        box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
      }

      h3{
        color: #0048b2;
        padding: 5px 0;
      }

      p{
        font-size: 13px;
        color: rgb(120,120,120);
      }

      .line{
        margin: 30px 0;
        height: 2px;
        width: 100%;
        border: 30px;
        background-color: rgb(220,220,220);
      }
  }
`

const Dashboard = () => {

  const profile = {
    img: "https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1",
    name: "Olaosebikan Williams",
    email: "emmy@gmail.com",
    phoneNumber: "09048988583",
  }

  const data = [
    {sex: "Male"},
    {genotype: "AA"},
    {bloodGroup: "O+"},
    {height: "183cm"},
    {weight: "77kg"}
  ]

  return (
    <Container>

      <div className="profile">
        <img src={profile.img} alt="" />
        <h3>{profile.name}</h3>
        <p>{profile.email}</p>
        <p>{profile.phoneNumber}</p>

        <div className="line" />
      </div>

      <div className="bio-data">
        {
          data.map((data, i)=>{
            return(
              <div className="data" key={i}>
                <p className="key">{Object.keys(data)[0]}</p>
                <p className="value">{Object.values(data)[0]}</p>
              </div>
            )
          })
        }
      </div>


    </Container>
  )
}

export default Dashboard
