import{FaPencilAlt, FaTimes} from "react-icons/fa"

function Tasks({students}) {
  return (
    <div >
      {students.map((student)=>{
        return(
            <div className='students'>
                <h3>{student.name} <FaTimes style={{color:"red"}} /></h3>
                <p>{student.matricule} <FaPencilAlt style={{color:"gray"}} /></p>

            </div>
        )
      })}
    </div>
  )
}

export default Tasks
