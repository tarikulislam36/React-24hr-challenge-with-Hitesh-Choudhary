import { useState } from 'react'


function App() {

 const [count, setCount] = useState(0)
// const [count, setCount] = useState(()=> {
//   console.log('USE IT FPR OPTIMIZATION PURPOSES')
//   return 4

// }) // This is the same as the line above


function increment(){
  // if(count < 30){
  //   setCount(count + 1)


  // }else{


  //   console.log('You have reached the maximum value')
  // }

  setCount(count + 1)
  
  // setCount(prevCount => prevCount + 1) // This is the same as the line above`

}

function decrement(){
// if(count > 0){    
//   setCount(count - 1)
// }else{
//   console.log('You have reached the minimum value')
// } 


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
