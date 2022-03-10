import './numeroInput.css';
import {useState} from 'react';


function NumeroInput(props) {

    const [numeroInput, setNumeroInput] = useState(props.numeroInput);

    const numeroInputHandler = (event) => {
        event.preventDefault();
        setNumeroInput(event.target.value);
        props.updateInput(event.target.value);
    }


    return (
        <div>
            <label>Número</label>
            <input type='int' onChange={numeroInputHandler} value={numeroInput} />
            
        </div>
    )

}
export default NumeroInput;