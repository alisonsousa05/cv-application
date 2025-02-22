import { useState } from "react";
import "../styles/general_information.css"


export default function EducationalInformation(
    {
    schoolName,
    changeSchoolName,
    titleOfStudy,
    changeTitleOfStudy,
    dateOfStudy,
    changeDateOfStudy
    
    }
){
    // const [inputText, setInputText] = useState('inputTxt');

    // const handleInputChange = (e) =>{
    //     setInputText(e.target.value)
    // }


    return(
        <div className="container">
            <h1 className="heading">Educational Experience</h1>
            <div className="trace"></div>
            <label htmlFor="Name" className="label"> School Name
                <input className="input" value={schoolName} onChange={changeSchoolName}/>
            </label>
            <label htmlFor="Name" className="label"> Title of Study
                <input className="input" value={titleOfStudy} onChange={changeTitleOfStudy}/>
            </label>
            <label htmlFor="Name" className="label"> Date of Study
                <input className="input" value={dateOfStudy} onChange={changeDateOfStudy}/>
            </label>
        </div>
    )

}