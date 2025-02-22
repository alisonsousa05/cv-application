import { useState } from "react";
import "../styles/general_information.css"


export default function JobExperience(
    {
    companyName,
    changeCompanyName,
    PositionTitle,
    changePositionTitle,
    startDate,
    changeStartDate,
    endDate,
    changeEndDate,
    description,
    changeDescription

    }){
    // const [inputText, setInputText] = useState('inputTxt');

    // const handleInputChange = (e) =>{
    //     setInputText(e.target.value)
    // }


    return(
        <div className="container">
            <h1 className="heading">Job Experience</h1>
            <div className="trace"></div>
            <label htmlFor="Name" className="label"> Company Name
                <input className="input" value={companyName} onChange={changeCompanyName}/>
            </label>
            <label htmlFor="Name" className="label"> Position Title
                <input className="input" value={PositionTitle} onChange={changePositionTitle}/>
            </label>
            <label htmlFor="Name" className="label"> Start Date
                <input className="input" type="date" value={startDate} onChange={changeStartDate}/>
            </label>
            <label htmlFor="Name" className="label"> End Date
                <input className="input" type="date" value={endDate} onChange={changeEndDate}/>
            </label>
            <label htmlFor="description" className="descriptionLabel"> Describe your job and experiences
                <input className="description" type="text" value={description} onChange={changeDescription}/>
            </label>
            
        </div>
    )

}