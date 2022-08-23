const TeacherCard = ({ name, age, hasPets }) => {

  return (
    <div>
      <h3>{name}, {age}</h3>
      <p>{hasPets ? "Has pets" : "No pets"}</p>
    </div>
  )
}

export default TeacherCard