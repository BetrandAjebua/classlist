 import Student from "./Student"
 
function Tasks({students, onUpdateClick, }) {
  return (
    <div >
      {students.map((student)=>{
        return(
            <Student onUpdateClick={onUpdateClick} key={student._id} student={student} />
        )
      })}
    </div>
  )
}

export default Tasks
