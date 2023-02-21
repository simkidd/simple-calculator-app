import React from 'react';
// import { useState } from 'react';
import './keypad.scss'

const Keypad = ({handleDisplay, clear, handleDelete, handleEquals, handlePercent}) => {

    // const [result, setResult] = useState("0")

    // const handleClick = (e)=>{
    //     setResult(result.concat(e.target.name))
    // }
    
    return (
        <div className='keypad'>
            <button onClick={clear} className='highlight-2'>AC</button>
            <button onClick={handleDelete} className='highlight-2'>C</button>
            <button value='%' onClick={handlePercent} className='highlight-2'>%</button>
            <button value='/' onClick={handleDisplay} className='highlight-1'>&divide;</button>
            <button value='7' onClick={handleDisplay}>7</button>
            <button value='8' onClick={handleDisplay}>8</button>
            <button value='9' onClick={handleDisplay}>9</button>
            <button value='*' onClick={handleDisplay} className='highlight-1'>&times;</button>
            <button value='4' onClick={handleDisplay}>4</button>
            <button value='5' onClick={handleDisplay}>5</button>
            <button value='6' onClick={handleDisplay}>6</button>
            <button value='-' onClick={handleDisplay} className='highlight-1'>-</button>
            <button value='1' onClick={handleDisplay}>1</button>
            <button value='2' onClick={handleDisplay}>2</button>
            <button value='3' onClick={handleDisplay}>3</button>
            <button value='+' onClick={handleDisplay} className='highlight-1'>+</button>
            <button value='0' onClick={handleDisplay} className='zero'>0</button>
            <button value='.' onClick={handleDisplay}>.</button>
            <button onClick={handleEquals} className='highlight-1'>=</button>
        </div>
    )
}

export default Keypad
