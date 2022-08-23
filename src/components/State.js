import { useState } from "react"

//Task: Have a button to increment a value

const State = () => {

  const [ counter, setCounter ] = useState(0)
  const [ like, setLike ] = useState(false)

  //likes -> getter -> whenever you want to access the value
  //setLikes -> setter -> whenever you want to modify the value

  // console.log("counter", counter)
  // console.log("liked", like)

  const decrement = () => {
    setCounter(counter - 1)
  }

  const toggleLike = () => {
    setLike(!like)
  }

  return (
    <div>
      State
      <p>
        {counter} <button onClick={() => setCounter(counter + 1)} >Increment</button>
        <button onClick={decrement}>Decrement</button>
      </p>
      <p>
        <button onClick={toggleLike}>{like ? "Dislike" : "Like" }</button>
      </p>
    </div>
  )
}

export default State
