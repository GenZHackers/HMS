import React from 'react'
import { Form, RightBar } from './Admin.styled'

const RegisterPatient = () => {
  return (
    <RightBar>
        <h2>Register Patient</h2>
        <Form>
        <input type="email" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Other Names'/>
        <input type="text" placeholder='Phone Number'/>
        <select placeholder='Gender'>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <input type="date"  />
        <input type="text" placeholder='Genotype'/>
        <input type="number" placeholder='Age'/>
        <input type="number" placeholder='Weight' />
    </Form>
    </RightBar>
    
  )
}

export default RegisterPatient