import React, { useEffect } from 'react'
import { useState } from 'react'

function UpdateForm({updateStudent, onUpdate}) {
    // console.log(updateStudent)

    const [student, setStudent] = useState({
      name: updateStudent.name || '',
      matricule: updateStudent.matricule || '',
      age: updateStudent.age || '',
      present: updateStudent.present || false,
    });
    

  useEffect(()=>{
    setStudent(updateStudent)
  },[updateStudent])

  const handleInput = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    }
    )
    console.log({ [e.target.name]: student[e.target.name] })
  }

const handleInputchecked = (e)=>{

  setStudent({
    ...student,
    [e.target.name]: e.target.checked
  }
  )
console.log((student.present))

}

const submitForm=(e)=>{
e.preventDefault()
return(student.name==="" || student.matricule===""|| student.age==="")? 
 alert("Ensure All fills are filled") : //If Fields are False
onUpdate(student)

}
   
  return (
    <form className='add-form' onSubmit={submitForm}>
      <h4 style={{alignContent:"center", textAlign:"center", color:"#028891" , fontWeight:"bold"}}>Update Student</h4>

      <div className='form-control'>
        <label>Full Name</label>
        <input name="name" className='form-input' value={student.name}
          placeholder='Enter Student Name Here' onChange={(e) => handleInput(e)}
        />
      </div>

      <div className='form-control'>
        <label>Matricle</label>
        <input name="matricule" className='form-input' value={student.matricule}
          placeholder='Enter Student Matricule' onChange={(e) => handleInput(e)}
        />
      </div>

      <div className='form-control'>
        <label>Age</label>
        <input type='number' name="age" className='form-input' value={student.age}
          placeholder='Student Age' onChange={(e)=>handleInput(e)}
        />
      </div>
      <div className='form-control' style={{display:"inline-flex"}}>
          Mark Present
          <input type='checkbox' name="present" className='form-input' style={{backgroundColor:"rgb(6, 169, 233)", color:"black"}}
            onChange={handleInputchecked} 
            checked={(student.present===null || student.present===false)? false:true}
          />
      </div>
     <div className='form-control'>
        <button className='btn btn-block' style={{backgroundColor:"rgb(6, 169, 233)"}} type='submit'>Update</button>
     </div>
    </form>
  )
}

export default UpdateForm
