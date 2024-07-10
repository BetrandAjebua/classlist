import{FaPencilAlt, FaTrashAlt} from "react-icons/fa"

import React from 'react'


const Student = ({student, onUpdateClick}) => {
const showUpdate=()=>{
  onUpdateClick(student)
}
  
let newdate = new Date(student.date);
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday:'long' };
const formattedDate = newdate.toLocaleDateString(undefined, options);
  return (
    <>
      <div className='students'>
                <h3>{student.name} <p style={{width:"10vwpx", justifyContent:"space-between"}}>
                <FaTrashAlt  style={{color:"red" , margin:"0  7px"}}  /> <span>{ "        " }</span>
                 <FaPencilAlt style={{color:"gray"}} onClick={showUpdate} />
        
                    </p> </h3>
                <p><strong>{student.matricule}</strong> </p> 
                <p  className="flex"><i>Age:<strong>{student.age} </strong> </i> <i style={{fontSize:"15px"}}>{formattedDate }</i></p>
               

            </div>
    </>
  )
}

export default Student

