import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Students from './components/Students'
import AddForm from './components/AddForm'
import UpdateForm from './components/UpdateForm'
import Footer from './components/Footer'
const App = () => {
  let [data, setData]=useState([])
  let [addFormDisplay, setAddFormDisplay] = useState(true)
  let [editFormDisplay, setEditFormDisplay] = useState(false)
  
  let [studentToUpdate, setStudentToUpdate] = useState([

  ])



  // Fetching All Data from the data base onLoad
useEffect(()=>{
  
 const fetchData= async()=>{
  await fetch('http://localhost:5000/api/students')
 .then(response => response.json())
 .then(data => {
   // Handle the data (e.g., update state or render components)
   setData(data) // Log the fetched data to the console
 })
 .catch(error => {
   // Handle any errors
   setData([])
   console.error('Error fetching data:', error);
 });
 }
 fetchData();
})
  // Posting Data
async function onSubmit(data) {
  try {
      const response = await fetch('http://localhost:5000/api/students', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Success:', result);

  } catch (error) {
      console.error('Error:', error);
  }
}

// Update Function
const onUpdateClick=(data)=>{
setStudentToUpdate(data);
setAddFormDisplay(false)
setEditFormDisplay(true)

}

const onDeleteClick = async(data)=>{
 let confirm = prompt("Do you want to Delete "+data.name+" With ID: "+data._id, "yes" )
 if(confirm==="yes"){
  try {
    const response = await fetch('http://localhost:5000/api/students/'+data._id, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
      }
    });

let rest = await response
 console.log(rest);
} catch (error) {
    console.error('Error:', error);
}
 }else{
  console.log("You Cancel Request")
 }
}

const onUpdate =async(data)=>{
  setEditFormDisplay(false);
  alert("Sending Data...")

    // Posting Data

  try {
      const response = await fetch('http://localhost:5000/api/students/'+data._id, {
          method: 'put',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      const result = await response.ok;
      console.log('Success:', result);
  } catch (error) {
      console.error('Error:', error);
  }

 
}


const onToggle= async(data)=>{
  try {
    const response = await fetch('http://localhost:5000/api/students/'+data._id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          present:!data.present

        }),
    });

    const result = await response.ok;
    console.log('Success:', result);
} catch (error) {
    console.error('Error:', error);
}
}

const onAddForm = ()=>{
setEditFormDisplay(false)
  setAddFormDisplay(!addFormDisplay)
  console.log("Form to Display: "+ !addFormDisplay)

}

  return (


    <div className='container'>
      <Header title="ClassList" onAddClick={onAddForm} checkText={addFormDisplay}/>
 {addFormDisplay && <AddForm onSubmit = {onSubmit} />} 
 {editFormDisplay && <UpdateForm updateStudent={studentToUpdate} onUpdate = {onUpdate}/>} 

      <Students students = {data}  onUpdateClick={onUpdateClick} onDeleteClick = {onDeleteClick} onToggle = {onToggle}/>
      <Footer />
    </div>
  )
}

export default App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         