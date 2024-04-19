import React, { useState } from 'react';


function Calculator() {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    
    setResult(eval(result).toString());
  };

  return (
    <div className='calculator'>
      <input type="text" placeholder='0' id='answer' defaultValue={result} />

      <div className="button-row">
        <button value="7" onClick={clickHandler}>7</button>
        <button value="8" onClick={clickHandler}>8</button>
        <button value="9" onClick={clickHandler}>9</button>
        <button value="*" onClick={clickHandler}>*</button>
      </div>

      <div className="button-row">
        <button value="4" onClick={clickHandler}>4</button>
        <button value="5" onClick={clickHandler}>5</button>
        <button value="6" onClick={clickHandler}>6</button>
        <button value="/" onClick={clickHandler}>/</button>
      </div>

      <div className="button-row">
        <button value="1" onClick={clickHandler}>1</button>
        <button value="2" onClick={clickHandler}>2</button>
        <button value="3" onClick={clickHandler}>3</button>
        <button value="+" onClick={clickHandler}>+</button>
      </div>

      <div className="button-row">
        <button value="0" onClick={clickHandler}>0</button>
        <button value="." onClick={clickHandler}>.</button>
        <button value="%" onClick={clickHandler}>%</button>
        <button value="-" onClick={clickHandler}>-</button>
      </div>

      <div className="button-row">
        <button className="clear" onClick={clearDisplay}>C</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
