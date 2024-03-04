import { useState } from 'react'


function App() {

const [count, setCount] = useState(0)

function increment(){
  setCount(count + 1)

}

function decrement(){

  setCount(count - 1)
}

  return (
    <>
    <center>
    <button onClick={decrement}> - </button>
<span> {count} </span>
<button onClick={increment}> + </button>
</center>
    </>
  )
}

export default App
