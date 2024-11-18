import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [inputNumber, setInputNumber] = useState<string>("")
  const [calculations, setCalculations] = useState<string>("")
  const [firstNumber, setFirstNumber] = useState(true)
  const [firstFirstNumber, setFirstFirstNumber] = useState(true)
  const allowedCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const allowedJoiners = ["+", "/", "*", "-", "%"]
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the div when the component mounts
    if (calcRef.current) {
      calcRef.current.focus();
    }
  }, []);

  function handleNumberBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    if(firstFirstNumber){
      //@ts-ignore
      setInputNumber(event.target.innerText)
      //@ts-ignore
      setCalculations((prevCalculations) => prevCalculations + event.target.innerText)
      setFirstFirstNumber(false)
    }
    else{
      if(firstNumber){
        //@ts-ignore
        setInputNumber((prevNumber) => prevNumber + event.target.innerText)
        //@ts-ignore
        setCalculations((prevCalculations) => prevCalculations + event.target.innerText)
      }
      else{
        //@ts-ignore
        setInputNumber(event.target.innerText)
        //@ts-ignore
        setCalculations((prevCalculations) => prevCalculations + event.target.innerText)
      }
    }
    setFirstNumber(true)
  }

  function handleCharacterBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    //@ts-ignore
    setCalculations((prevCalculations) => prevCalculations + event.target.innerText)
    setFirstNumber(false)
  }

  function handleCBtn(){
    setInputNumber("0")
    setFirstFirstNumber(true)
  }

  function handleCEBtn(){
    setInputNumber("0")
    setCalculations("")
    setFirstFirstNumber(true)
  }

  function handleDelete(){
    setCalculations(calculations[calculations.length])
  }

  function handleInput(key: React.KeyboardEvent<HTMLDivElement>){
    if(allowedCharacters.includes(key.key)){
      setCalculations((prevCalculations) => prevCalculations + key.key)
      setFirstNumber(true)
    }
    if(allowedJoiners.includes(key.key)){
      setCalculations((prevCalculations) => prevCalculations + key.key)
      setFirstNumber(false)
    }
    if(firstNumber){
      setInputNumber((prevCharacters) => prevCharacters + key.key)
    }
  }

  function equal(){
    console.log(eval(calculations))
    setInputNumber(eval(calculations))
    setCalculations(eval(calculations))
  }
  console.log(calculations)
  console.log()
  return (
    <div id='App' onKeyDown={(key) => handleInput(key)} tabIndex={0} ref={calcRef}>
      <div id='topCalc'>
        <p id='calculations'>{calculations}</p>
        <div id='number'>{inputNumber}</div>
      </div>
      
      {/* numbers */}
      <button id="btn9" onClick={(event) => handleNumberBtn(event)}>9</button>
      <button id="btn8" onClick={(event) => handleNumberBtn(event)}>8</button>
      <button id="btn7" onClick={(event) => handleNumberBtn(event)}>7</button>
      <button id="btn6" onClick={(event) => handleNumberBtn(event)}>6</button>
      <button id="btn5" onClick={(event) => handleNumberBtn(event)}>5</button>
      <button id="btn4" onClick={(event) => handleNumberBtn(event)}>4</button>
      <button id="btn3" onClick={(event) => handleNumberBtn(event)}>3</button>
      <button id="btn2" onClick={(event) => handleNumberBtn(event)}>2</button>
      <button id="btn1" onClick={(event) => handleNumberBtn(event)}>1</button>
      <button id="btn0" onClick={(event) => handleNumberBtn(event)}>0</button>

      {/* operations */}
      <button id="division" onClick={(event) => handleCharacterBtn(event)}>/</button>
      <button id="btnMultiply" onClick={(event) => handleCharacterBtn(event)}>*</button>
      <button id="btnMinus" onClick={(event) => handleCharacterBtn(event)}>-</button>
      <button id="btnPlus" onClick={(event) => handleCharacterBtn(event)}>+</button>
      <button id="btnPercent" onClick={(event) => handleCharacterBtn(event)}>%</button>
      <button id="btnDBO">division by one</button>
      <button id="btnPower">power 2</button>
      <button id="btnSR">square root</button>

      {/* deletion options */}
      <button id="btnCE" onClick={handleCEBtn}>CE</button>
      <button id="btnC" onClick={handleCBtn}>C</button>
      <button id="btnDelete" onClick={handleDelete}>delte</button>

      {/* diffrent shit */}
      <button id="btnPlusMinus">+-</button>
      <button id="btnComma">,</button>
      <button id="btnEqual" onClick={equal}>=</button>
    </div>
  )
}

export default App
