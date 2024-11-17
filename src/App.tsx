import { useState } from 'react'
import './App.css'

function App() {
  const [inputNumber, setInputNumber] = useState<number>(0)
  const [calculations, setCalculations] = useState<string>("")
  const [character, setCharacter] = useState("")
  const allowedCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const allowedJoiners = ["+", "/", "*", "-"]
  function handleInputNumber(event :React.ChangeEvent<HTMLInputElement>) {
    try{
      setInputNumber(Number(event.target.value))
    }
    catch(error){
      console.error()
      setInputNumber(Number(0))
    }
  }

  function handleNumberBtn(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    //@ts-ignore
    setInputNumber(Number(event.target.innerText))
  }

  function handleCBtn(){
    setInputNumber(0)
  }

  function handleCEBtn(){
    setInputNumber(0)
    setCalculations("")
  }

  function handleInput(key: React.KeyboardEvent<HTMLDivElement>){
    let changeKey = false
    if(allowedCharacters.includes(key.key)){
      changeKey = true
    }
    else if(!allowedCharacters.includes(key.key)){
      changeKey = false
    }
    if(allowedJoiners.includes(key.key)){
      setCharacter(key.key)
      setCalculations((prevCalculations) => `${prevCalculations} ${character}`)
    }
    setInputNumber(changeKey ? (prevCharacters) => Number(prevCharacters + key.key) : (prevCharacters) => Number(prevCharacters))
    setCalculations((prevCalculations) => `${prevCalculations} ${inputNumber}`)
    changeKey = false
  }

  function equal(){
    setInputNumber(eval(calculations))
  }
  console.log(character)
  console.log()
  return (
    <div id='App' onKeyDown={(key) => handleInput(key)}>
      <div id='topCalc'>
        <p id='calculations'>{calculations}</p>
        <div id='number' onChange={handleInputNumber}>{inputNumber}</div>
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
      <button id="division">/</button>
      <button id="btnMultiply">*</button>
      <button id="btnMinus">-</button>
      <button id="btnPlus">+</button>
      <button id="btnPercent">%</button>
      <button id="btnDBO">division by one</button>
      <button id="btnPower">power 2</button>
      <button id="btnSR">square root</button>

      {/* deletion options */}
      <button id="btnCE" onClick={handleCEBtn}>CE</button>
      <button id="btnC" onClick={handleCBtn}>C</button>
      <button id="btnDelete">delte</button>

      {/* diffrent shit */}
      <button id="btnPlusMinus">+-</button>
      <button id="btnComma">,</button>
      <button id="btnEqual" onClick={equal}>=</button>
    </div>
  )
}

export default App
