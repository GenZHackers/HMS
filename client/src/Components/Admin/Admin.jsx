import React from 'react'
import { LeftBar, MainContainer, RightBar } from './Admin.styled'
import { HiHeart, HiLogout, HiPencil, HiSwitchVertical, HiUser, HiUserAdd } from "react-icons/hi"
import RegisterPatient from './RegisterPatient'

const Admin = () => {
    const actions = [
        {
            title: "Register Patient",
            details: "register new patient",
            icon: <HiUser size={24} color="white"/>
        },
        {
            title: "Check All Patients",
            details: " list of all patients and search",
            icon: <HiUserAdd size={24} color="white"/>
        },
        {
            title: "Appointments",
            details: "list of all appointments made",
            icon: <HiPencil size={24} color="white"/>
        },
        {
            title: "Upload Doctors",
            details: "list of all doctors and ability to upload them all",
            icon: <HiHeart size={24} color="white"/>
        },
        {
            title: "Logout",
            details: "logout",
            icon: <HiSwitchVertical size={24} color="white"/>
        }
    ]
  return (
    <MainContainer>
        <LeftBar>
            {
                actions.map((action, i)=>{
                    return(
                        <div className="action">
                            {action.icon}
                            <h3>{action.title}</h3>
                        </div>
                    )
                })
            }
        </LeftBar>

        
        <RegisterPatient />
        
    </MainContainer>
  )
}

export default Admin