import React from 'react'
import Keypad from '../components/Keypad';
import '../styles/calculator.scss';
import { useState } from 'react';

const Calculator = () => {

    const [result, setResult] = useState("")

    const handleDisplay = (e) => {
        setResult(result.concat(e.target.value))
    }

    const clear = () => {
        setResult("")
    }

    const handleDelete = () => {
        setResult(result.slice(0, -1))
    }

    const handleEquals = () => {
        // eslint-disable-next-line no-eval
        setResult(eval(result).toString())
    }

    const handlePercent = () => {
        const percent = (result / 100).toString();
        setResult(percent)
    }

    return (
        <div className="calculator">
            <h2 className='brand-name'><span>oni</span>Dev. </h2>
            <form >
                <input type="text" value={result} />
            </form>

            <Keypad handleDisplay={handleDisplay} clear={clear} handleDelete={handleDelete} handleEquals={handleEquals} handlePercent={handlePercent} />
        </div>
    )
}

export default Calculator
