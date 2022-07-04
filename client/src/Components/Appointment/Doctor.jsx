import React from 'react'
import styled from 'styled-components'
import { HiCalendar, HiX } from "react-icons/hi"

const Doctor = ({doctor, cancel}) => {
  return (
    <DoctorContainer>
        <div className="return" onClick={()=> {cancel(null)}}>
            <HiX size={18} color="white" />
        </div>

        <img src={doctor.img} alt="" />
        <div className="details">
            <h3>{doctor.name}</h3>
            <p className="type">{doctor.type}</p>
            
            <div className="availability">
                <div className="icon">
                    <HiCalendar size={14} color="white"/>
                </div>
                <p>9am - 4pm (Mon - Friday)</p>
            </div>

            <div className="date-picker">
                <div className="container">
                    <h5>Date</h5>
                    <input type="date"/>
                </div>
               <div className="container">
                <h5>Time</h5>
                <div className="items">
                    <div className="item">
                        9am
                    </div>

                    <div className="item">
                        11am
                    </div>

                    <div className="item">
                        1pm
                    </div>

                    <div className="item">
                        3pm
                    </div>
                </div>
               </div>
            </div>

            <div className="appoint">
                Book Appointment
            </div>
        </div>

    </DoctorContainer>
  )
}

const DoctorContainer = styled.div`
    display: sticky;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;

    .return{
        display: inline-flex;
        padding: 5px;
        border-radius: 6px;
        background-color: rgba(0,0,0,0.5);
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 2vh;
        left: 2vh;
        z-index: 99;
    }

    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
        position: absolute;
        top: 0;
    }

    .details{
        position: fixed;
        top: 15vh;
        left: 0;
        right: 0;
        background-color: white;
        height: 100%;
        border-radius: 20px 20px 0 0 ;
        padding: 20px 20px 80px;
        box-shadow: 0 -16px 40px rgba(0,0,0, 0.5);

        .appoint{
            width: 100%;
            background-color: #0048b2;
            padding: 15px;
            color: white;
            text-align: center;
            border-radius: 10px;
        }

        h3{
            color:#0048b2;
        }

        .type{
            font-size: 15px;
            color: rgb(120,120,120);
        }

        .availability{
            display: flex;
            gap: 3px;
            align-items: center;

            .icon{
                background-color: #0048b2;
                padding: 3px 6px;
                border-radius: 3px;
            }

            p{
                font-size: 12px;
            }
        }

        .date-picker{
            padding: 20px;
            display: grid;
            gap: 40px;
            border-radius: 20px;
            .container{
                display: grid;
                align-items: center;
                gap: 20px;
                box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
                padding: 20px;

                input{
                    padding: 15px;
                    border: 1px solid #0048b2;
                    border-radius: 10px;

                }

                h5{
                    color: #0048b2;
                    text-align: center;
                }

                .items{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    justify-items: center;
                    text-align: center;

                    .item{
                        padding: 4px 10px;
                        font-size: 12px;
                        border-radius: 15px;
                    }

                    .item:hover{
                        color: white;
                        background-color: #0048b2;

                    }
                }
            }
        }
    }
`
export default Doctor