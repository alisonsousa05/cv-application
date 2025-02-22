import { useState } from "react";
import "../styles/general_information.css"


export default function Generalinformation({
    name,
    setName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    dateOfBirth,
    setDateOfBirth,
    maritalStatus,
    setMaritalStatus
}){



    return(
        <div className="container">
            <h1 className="heading">General Information</h1>
            <div className="trace"></div>
            <label htmlFor="Name" className="label"> Name
                <input className="input" value={name} onChange={setName}/>
            </label>
            <label htmlFor="Email" className="label"> Email
                <input className="input" type="email" value={email} onChange={setEmail}/>
            </label>
            <label htmlFor="Phone Number" className="label"> Phone Number
                <input className="input" type="tel" value={phoneNumber} onChange={setPhoneNumber}/>
            </label>
            <label htmlFor="Address" className="label"> Address
                <input className="input" value={address} onChange={setAddress}/>
            </label>
            <label htmlFor="Date of Birth" className="label"> Date of Birth
                <input className="input" type="date" value={dateOfBirth} onChange={setDateOfBirth}/>
            </label>
            <label htmlFor="Marital Status" className="label"> Marital Status
                <input className="input" value={maritalStatus} onChange={setMaritalStatus}/>
            </label>
        </div>
    )

}

