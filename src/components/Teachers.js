import { useState } from "react"
import TeacherCard from "./TeacherCard"

//use later on example
const data = [
  { id: 1, name: "Karla", age: 27, hasPets: true },
  { id: 2, name: "Andre", age: 31, hasPets: false },
  { id: 3, name: "Maria", age: 27, hasPets: false },
  { id: 4, name: "Matias", age: 30, hasPets: false},
  { id: 5, name: "Swen", age: 29, hasPets: true },
]

const Teachers = () => {

  const [ hide, setHide ] = useState(false)

  const toggleHide = () => {
    setHide(!hide)
  }

  return (
    <div>
      Teachers
      <br/>
      <button onClick={toggleHide}>{ hide ? "Display" : "Hide" }</button>
      {/*  {!hide && data.map(teacher => <TeacherCard  <-- ANOTHER OPTION */}
      {hide ? "" : data.map(teacher => <TeacherCard 
        key={teacher.id}
        name={teacher.name} 
        age={teacher.age} 
        hasPets={teacher.hasPets}/>
      )}
    </div>
  )
}

export default Teachers
