const TeacherCard = ({ name, age, hasPets }) => {

  return (
    <div>
      <p><b>{name}</b>, {age} years old</p>
      <p>{hasPets ? "Has pets" : "No pets"}</p>
    </div>
  )
}

export default TeacherCard