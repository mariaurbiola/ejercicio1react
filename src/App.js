import logo from './logo.svg';
import './App.css';
import NumeroInput from './components/numeroInput';
import NumeroOutput from './components/numeroOutput';
import React from 'react';
import {useState} from 'react';

function App() {
  let [numeroInput, setNumeroInput] = useState();
  //console.log(numeroInput);
  const updateInput = (numero) => {
    setNumeroInput(numero);
    console.log('Numero actualizado = '+numeroInput);
  }

  let [numeroMultiplicacion, setNumeroMultiplicacion] = useState();
  const numeroMultiplicacionHandler = (event) => {
      setNumeroMultiplicacion(event.target.value);  
  }

  let [numeroOutput, setNumeroOutput] = useState();

  const multiplicar=() => {
    if ((numeroInput === (undefined)) || (numeroInput === ('')) || (numeroMultiplicacion=== undefined)){
      console.log('input '+numeroInput); 
      console.log('mult '+numeroMultiplicacion);
      console.log('Por favor, rellene todos los campos.');
      const mensajeError = 'Por favor, rellene todos los campos.';
      setNumeroOutput(mensajeError);
      
    }else{
      const resultado = numeroInput*numeroMultiplicacion;
      console.log(numeroInput+'multiplicado por'+numeroMultiplicacion+' = '+resultado);
      setNumeroOutput(numeroInput+' multiplicado por '+numeroMultiplicacion+' = '+resultado);
    }

  }

  



  
  
  return (

    <React.Fragment>
      <NumeroInput updateInput = {updateInput}/>

      <button type="submit" onClick={numeroMultiplicacionHandler} value={37}>37</button>
      <button type="submit"onClick={numeroMultiplicacionHandler} value={43}>43</button>

      <button type="submit"onClick={multiplicar}>Calcular</button>

      <NumeroOutput resultado={numeroOutput}/>

    </React.Fragment>

  );
}

export default App;

