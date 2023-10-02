import React from 'react'

function Result(props) {
   
  
  return (
    <div className='show'>
          <p>Your score : {props.score} </p>
          <p> Total score : {props.totalScore}</p>
          <p>Your Percentage is : {(props.score / props.totalScore) * 100} % </p>
          <button onClick={props.Reset} >Reset All</button>
           

    </div> 
  )
}

export default Result
