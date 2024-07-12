import React from 'react'
import { useState } from 'react'

function AddForm({onSubmit}) {
  let [student, setStudent] = useState({
    name: "",
    matricule: "",
    age: "",
    present: false

  })

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
if(student.name==="" || student.matricule===""|| student.age===""){
  alert("Ensure All fills are filled")
} else{
  setStudent({
    name: "",
    matricule: "",
    age: "",
    present: false

  })
return onSubmit(student) 
}




}
   
  return (
    <form className='add-form' onSubmit={submitForm}>
      <h4 style={{alignContent:"center", textAlign:"center"}}>Add Student</h4>
      <div className='form-control'>
        <label>First Name</label>
        <input name="name" className='form-input' value={student.fullname}
          placeholder='Enter Student First Name Here' onChange={(e) => handleInput(e)}
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
          placeholder='Student Age' onChange={handleInput}
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
        <button className='btn btn-block'  type='submit'>Submit</button>
     </div>
    </form>
  )
}

export default AddForm
