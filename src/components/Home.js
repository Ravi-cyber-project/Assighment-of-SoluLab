import React from 'react'
import './styles/Home.css'
import img from './styles/patient.jpg'

import { RiFileList2Line as File } from "react-icons/ri";
import { CgNotes as Notes } from "react-icons/cg";

const Home = () => {

    const patient = {
        name:"Diane Cooper",
        mail:"diane.cooper@example.com",
        pastTreatments:15,
        upcomingTreatments:2,
        gender:"Female",
        birthday:"Feb 24th, 1997",
        Phone:"(239) 555 -0108",
        registered:"Feb 24th, 1997",
        street:"JL. Diponegoro No. 21",
        city:"Cilacap",
        zip:655849,
        stauts:"Active Member"
    }

    const upcomingApointment = [
        {
            date:"26 Nov ‘19",
            time:"09.00 - 10.00",
            treatment:"Open Access",
            dentist:"Drg. Adam H.",
            nurse:"Jessicamila",  
        },
        {
            date:"12 Nov ‘19",
            time:"09.00 - 10.00",
            treatment:"Root Canal",
            dentist:"Drg. Adam H.",
            nurse:"Jessicamila",  
        }
    ]

  return (
    <div className="home">
        <div className="left" >
            <div className="top">
                <div  className='patient' >
                    <img src={img} alt="patient img" />
                    <p>
                        <p className="name">{patient.name}</p>
                        <p className="mail">{patient.mail}</p>
                    </p>
                
                    <div className="apoint">
                        <div>
                            <p>{patient.pastTreatments}</p>
                            <p>Past</p>
                        </div>
                        <div>
                            <p>{patient.upcomingTreatments}</p>
                            <p>Upcoming</p>
                        </div>
                    </div>
                </div>
               
                <div className="send">Send Message</div>
            </div>
            <div className="bottom">
                <p>Files / Documents</p>
                <div>
                    <div>
                        <File />
                        <p>Check Up Results.pdf</p>
                    </div>
                    <div>
                        <File />
                        <p>Check Up Results.pdf</p>
                    </div>
                    <div>
                        <File />
                        <p>Medical Prescription.pdf</p>
                    </div>
                    <div>
                        <File />
                        <p>Dental X-Ray Result.pdf</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right" >
            <div className="details">
                <div>
                    <p>Gender</p>
                    <p>{patient.gender}</p>
                </div>
                <div>
                    <p>Birthday</p>
                    <p>{patient.birthday}</p>
                </div>
                <div>
                    <p>Phone Number</p>
                    <p>{patient.Phone}</p>
                </div>
                <div>
                    <p>Registered Date</p>
                    <p>{patient.registered}</p>
                </div>
                <div>
                    <p>Street Address</p>
                    <p>{patient.street}</p>
                </div>
                <div>
                    <p>City</p>
                    <p>{patient.city}</p>
                </div>
                <div>
                    <p>Zip Code</p>
                    <p>{patient.zip}</p>
                </div>
                <div>
                    <p>Member Status</p>
                    <p>{patient.stauts}</p>
                </div>
            </div>
            <div className="shedules" >
                <div>
                    Upcoming Appointments
                </div>
                <div>
                    Past Appointments
                </div>
                <div>
                    Medical Records
                </div>
            </div>
            <div className="treatments">
                <div className="treatment-head">
                    <p>Root Canal Treatment</p>
                    <div>
                      <p>Show Previous Treatments</p>
                    </div>
                    
                </div>
                <div className="treat-list">
                {upcomingApointment.map(items=>{
                    return(<>
                        <div className="list">
                            <div className="date all">
                                <div>
                                    <h2>{items.date}</h2>
                                    <p>{items.time}</p>
                                </div>
                            </div>
                            <hr />
                            <div className='treat all'>
                                <div>
                                    <p className="t-head">Treatment</p>
                                    <p className="t-content t">{items.treatment}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="dentist all">
                                <div>
                                    <p className="t-head">Dentist</p>
                                    <p className="t-content">{items.dentist}</p>
                                </div>
                            </div>
                            <div className="nurse ">
                                
                                    <p className="t-head">Nurse</p>
                                    <p className="t-content">{items.nurse}</p>
                               
                            </div>
                            <div className="notes">
                                <Notes />
                                <p>Note</p>
                            </div>
                        </div>
                    </>)
                })}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home