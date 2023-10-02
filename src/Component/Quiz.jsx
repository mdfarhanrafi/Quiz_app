import React, { useState } from 'react'
import QuizData from './QuizQues'
import Result from './Result'
function Quiz() {
     
    const [currentq, setcurrentq] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedoption, setclickedoption] = useState(0);
     
    const [showResult, setShowResult] = useState(false); 
    
    const changeQues = () => {
        updateScore();   
        if (currentq !== QuizData.length - 1) {
            setcurrentq(currentq + 1);
            setclickedoption(0);
        }
        else {
            setShowResult(true);
        }

    } 
    
    const updateScore = () => { 
        if (clickedoption === QuizData[currentq].answer) {
            setScore(score + 1);
         }

    }
    
    const ResetAll = () => {
        setcurrentq(0);
        setScore(0);
        setclickedoption(0);
        setShowResult(false);
    }
  
   
  return ( 
    <div>
          <h4 className="heading_txt">Quiz App</h4>
          <div className="container">
              {showResult ? (
                  <Result score ={score} totalScore= {QuizData.length} Reset={ResetAll}/>
              ):(
              <>
              <div className="ques">
                  <span id='#ques_num' >{currentq+1}.</span>  
                  <span id='ques_txt'> {QuizData[currentq].question }</span>
              </div>    
              <div className='option-container'>
                  {QuizData[currentq].options.map((option, index) => {
                      return (
                          <button className={`option_btn ${clickedoption === index + 1 ? 'checked' : null
                              } `}
                              key={index} onClick={()=>setclickedoption(index+1)} > {option}
                          </button>  
                          
                       )  
                       
                    

                  })}  
              </div>
               
              <button id='next_btn' onClick={changeQues} > Next Button</button>
              </>)}
          </div>

    </div>
  )
}

export default Quiz
