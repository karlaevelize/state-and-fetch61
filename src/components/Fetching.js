import { useEffect, useState } from "react"
import axios from "axios"

//pokemon url: https://pokeapi.co/api/v2/pokemon
//random cat gif: https://cataas.com/cat/gif
//game of thrones: http://hp-api.herokuapp.com/api/characters/1
//list of quotes: https://api.quotable.io/random 

//Fetching flow
//1. Write an async function
//2. Make a request with axios
//3. Console.log what I'm getting back
//4. Call the function inside useEffect
//5. Check my console.log and put the data in the state
//6. Display on the screen

const Fetching = () => {

  const [ cat, setCat ] = useState("")
  const [ characters, setCharacters ] = useState(null)

  const getCat = async () => {
    const response = await axios.get("https://api.quotable.io/random")
    // console.log("cat response", response)
    setCat(response.data)
  }

  const getCharacters = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/got/characters")
    console.log("characters", response)
    setCharacters(response.data.rows)
  }

  useEffect(() => {
    getCat()
    getCharacters()
  }, [])
  //empty array = runs once
  //variable in the array = runs whenever the variable changes

  return (
    <div>
      Hello
      {!cat ? "Loading" : <div>
        <p>{cat.content}, <b>{cat.author}</b></p>
      </div>}
      {characters && characters.map(char => {
        return (
          <div>
            <h4>{char.name}</h4>
            <img style={{ width: 200, height: 200}} src={char.imageUrl}/>
          </div>
        )
      })}
    </div>
  )
}

export default Fetching