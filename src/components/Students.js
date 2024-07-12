 import Student from "./Student"
 
function Tasks({students, onUpdateClick, onDeleteClick, onToggle}) {

  return (
    <div >
      {students.map((student)=>{
        return(
            <Student  onUpdateClick={onUpdateClick} key={student._id} student={student} onDeleteClick={onDeleteClick} onToggle={onToggle} />
        )
      })}
    </div>
  )
}

export default Tasks
