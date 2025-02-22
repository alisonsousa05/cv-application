import { useState } from "react";
import "../styles/right_side.css"


export default function RightSideComponent({
    nameDesc,
    dateOfBirthDesc,
    adressDesc,
    phoneDesc,
    emailDesc,
    schoolNameDesc,
    titleOfStudyDesc,
    dateOfStudyDesc,
    companyNameDesc,
    positionTitleDesc,
    startDateDesc,
    endDateDesc,
    descriptionDesc
}){
    return(
        <div className="containerRightSide">
            <div className="personalInformation">
                <p>{nameDesc}</p>
                <p>{dateOfBirthDesc}</p>
            </div>
        </div>
    )
}