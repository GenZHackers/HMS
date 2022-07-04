import React, { useState } from "react"
import styled from "styled-components"
import {
  FaEye,
  FaHandshakeAltSlash,
  FaTooth,
  FaUserAlt,
  FaXRay,
} from "react-icons/fa"
import Doctor from "../Components/Appointment/Doctor"

const Appointment = () => {
  const [appoint, setAppoint] = useState(false)
  const [doctor, setDoctor] = useState()

  const categories = [
    {
      title: "PCP",
      color: "green",
      icon: <FaHandshakeAltSlash size={20} />,
    },
    {
      title: "Dermatologist",
      color: "purple",
      icon: <FaUserAlt size={20} />,
    },
    {
      title: "Dentist",
      color: "blue",
      icon: <FaTooth size={20} />,
    },
    {
      title: "Radiologist",
      color: "red",
      icon: <FaXRay size={20} />,
    },
    {
      title: "Optician",
      color: "orange",
      icon: <FaEye size={20} />,
    },
  ]

  const doctors = [
    {
      name: "Dr. Human",
      type: "internist",
      exp: "7yrs experience",
      img: "https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1",
    },
    {
      name: "Dr. Human",
      type: "internist",
      exp: "7yrs experience",
      img: "https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1",
    },
    {
      name: "Dr. Human",
      type: "internist",
      exp: "7yrs experience",
      img: "https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1",
    },
  ]

  return (
    <AppointmentContainer>
      <div className="categories">
        <h3>Categories</h3>
        <div className="category">
          {categories.map((item, i) => {
            return (
              <div className="item" key={i} style={{ opacity: i===0 ? 1 : 0.3}}>
                <div
                  className="icon_container"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
                <p style={{ color: item.color }}>{item.title}</p>
              </div>
            )
          })}
        </div>

        <p>
          Primary Care Practitioner (PCP) are trained to treat people of all
          ages for a wide variety of medical issues, including disease
          prevention and maintenance. When you’re sick, either with a cold or
          something more serious, you may first visit your PCP
        </p>
      </div>

      <div className="doctors">
        <h3>Doctors</h3>
        <p>Available Doctors: 7</p>
        <div className="container">
          {doctors.map((dr, i) => {
            return (
              <div className="doctor" key={i} onClick={()=> setDoctor(dr)}>
                <img src={dr.img} alt="" />
                <div className="texts">
                  <h4>{dr.name}</h4>
                  <p>{dr.type}</p>
                  <p className="small">{dr.exp}</p>
                </div>
                
                {/* {console.log(appoint)} */}
              </div>
            )
          })}
        </div>
      </div>
      { doctor && <Doctor doctor={doctor} cancel={setDoctor}/>}
    </AppointmentContainer>
  )
}

const AppointmentContainer = styled.div`
  padding: 10px 10px 80px;

  .categories {
    display: grid;
    gap: 10px;

    p {
      font-size: 10px;
      padding: 10px;
    }

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #0048b2;
    }

    .category {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .item {
        font-size: 12px;
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
      }

      .icon_container {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        color: white;
        display: grid;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .doctors {
    padding: 10px;

    h3 {
      font-size: 20px;
      color: #0048b2;
    }

    p {
      color: rgb(120, 120, 120);
      font-size: 15px;
    }

    .container {
      display: grid;
      gap: 10px;
      align-items: center;

      .doctor {
        display: flex;
        gap: 10px;
        align-content: center;
        align-items: center;
        box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
        border-radius: 8px;
        padding: 10px;

        img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 50%;
        }

        .small {
          font-size: 10px;
        }
      }
    }
  }
`

export default Appointment
