import { useState } from 'react'
import './App.css'
import Generalinformation from './components/general_information.jsx';
import EducationalInformation from './components/educational_experience.jsx';
import JobExperience from './components/job_experience.jsx';
import Header from './components/header.jsx';
import RightSideComponent from './components/right-side-component.jsx';
// import Div from './components/div.jsx'




function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAdress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const changeName = (e) =>{
    setName(e.target.value);
  }
  const changeEmail = (e) =>{
    setEmail(e.target.value);
  }
  const changePhone = (e) =>{
    setPhone(e.target.value);
  }
  const changeAdress = (e) =>{
    setAdress(e.target.value);
  }
  const changeDateOfBirth = (e) =>{
    setDateOfBirth(e.target.value);
  }
  const changeSchoolName = (e) =>{
    setSchoolName(e.target.value);
  }
  const changeTitleOfStudy = (e) =>{
    setTitleOfStudy(e.target.value);
  }

  const changeDateOfStudy = (e) =>{
    setDateOfStudy(e.target.value);
  }
  const changeCompanyName = (e) =>{
    setCompanyName(e.target.value);
  }
  const changePositionTitle = (e) =>{
    setPositionTitle(e.target.value);
  }
  const changeStartDate = (e) =>{
    setStartDate(e.target.value);
  }
  const changeEndDate = (e) =>{
    setEndDate(e.target.value);
  }
  const changeDescription = (e) =>{
    setDescription(e.target.value);
  }


  return (
    <>
    <Header />
    <div className='leftSide'>
      
      <Generalinformation name={name} setName={changeName} email={email} setEmail={changeEmail} 
      phoneNumber={phone} setPhoneNumber={changePhone} address={address} setAddress={changeAdress} dateOfBirth={dateOfBirth}
      setDateOfBirth={changeDateOfBirth}/>

      <EducationalInformation 
      schoolName={schoolName}
      changeSchoolName={changeSchoolName}
      titleOfStudy={titleOfStudy}
      changeTitleOfStudy={changeTitleOfStudy}
      dateOfStudy={dateOfStudy}
      changchangeDateOfStudy={changeDateOfStudy}/>

      <JobExperience
      companyName={companyName}
      changeCompanyName={changeCompanyName}
      positionTitle={positionTitle}
      changePositionTitle={changePositionTitle}
      startDate={startDate}
      changeStartDate={changeStartDate}
      endDate={endDate}
      changeEndDate={changeEndDate}
      description={description}
      changeDescription={changeDescription}
       />

    </div>
    <div className='divisionLine'></div>
    <div className='rightSide'>
      <div className='sheet'>
        <RightSideComponent nameDesc={name} dateOfBirthDesc={dateOfBirth}
        adressDesc={address} phoneDesc={phone} emailDesc={email}
        schoolNameDesc={schoolName} titleOfStudyDesc={titleOfStudy}
        dateBirthDesc={dateOfStudy} companyNameDesc={companyName}
        positionTitleDesc={positionTitle} startDateDesc={startDate}
        endDateDesc={endDate} descriptionDesc={description} />

      </div>


    </div>
    </>
  );
}


function Div({ value, onChange }){
  // const [inputText, setInputText] = useState('inputTxt');

  // const handleInputChange = (e) =>{
  //     setInputText(e.target.value)
  // }


  return(
      <div>
          <input onChange={onChange} value={value} />
      </div>
  );
}

export default App
