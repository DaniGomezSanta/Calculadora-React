import { useState } from "react";
import BackspaceIcon from '@mui/icons-material/Backspace'; 
import './styles.css'; 

const Calculadora = () => {

   const [result, setResult] = useState('');

   const handleClick = (e)=> {
    const operator = e.target.name;
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        if(result !== ''){
            setResult(result.concat(operator));
        }
    } else {
        setResult(result.concat(operator));
    }
   }; 

   const calcular = ()=> {
    try {
        setResult(eval(result).toString())
    } catch (error) {
        setResult('Error')
    }
   };

   const clear = () => {
    setResult('')
   };

   const clearOne = () => {
    setResult(result.slice(0, -1));
   };


  return (
    <div className="calculadora">
       <h1>Calculadora</h1>
        <input type="text" className="input" value={result}/>
        <div className="pantalla">
            <button className="botones" onClick={clear}>CE</button>
            <button className="botones" onClick={clear}>C</button>
            <button className="botones" onClick={clearOne}><BackspaceIcon /></button>
            <button className="botones" name="/" onClick={handleClick}>/</button>
            <button className="boton" name="7" onClick={handleClick}>7</button>
            <button className="boton" name="8" onClick={handleClick}>8</button>
            <button className="boton" name="9" onClick={handleClick}>9</button>
            <button className="botones" name="*" onClick={handleClick}>*</button>
            <button className="boton" name="4" onClick={handleClick}>4</button>
            <button className="boton" name="5" onClick={handleClick}>5</button>
            <button className="boton" name="6" onClick={handleClick}>6</button>
            <button className="botones" name="-" onClick={handleClick}>-</button>
            <button className="boton" name="1" onClick={handleClick}>1</button>
            <button className="boton" name="2" onClick={handleClick}>2</button>
            <button className="boton" name="3" onClick={handleClick}>3</button>
            <button className="botones" name="+" onClick={handleClick}>+</button>
            <button className="botones" name="." onClick={handleClick}>.</button>
            <button className="boton" name="0" onClick={handleClick}>0</button>
            <button className="botones" name="." onClick={handleClick}>.</button>
            <button className="botones" onClick={calcular}>=</button>
        </div>
    </div>
  )
}

export default Calculadora
