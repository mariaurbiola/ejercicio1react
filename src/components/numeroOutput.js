import './numeroOutput.css';
import {useState} from 'react';

function NumeroOutput(props) {
    const resultado = props.resultado;

    return (
        <div>
            <label>Resultado</label>

            <input value={resultado}/>
        </div>
    )
}
export default NumeroOutput;