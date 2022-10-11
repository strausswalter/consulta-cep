import React, { useState, useRef } from 'react';
import './App.css';
import Pesquisa from './Containers/Pesquisa'
import Erro from './Containers/Erro'
import Carregando from './Containers/Carregando'
import Resultados from './Containers/Resultados'

function App() {
  const [nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  const [errorMessage, setErrorMessage] = useState("");//variavel para armazenar a mensagem de erro em um nivel acima para compartilhar com os compontes erro e pesquisa.
  const ticket = useRef(1);//useRef usado para ser o indicador da ultima requisição feita. para controlar botão cancelar contulta (erro.js)

  function goTo(nomeTela){
    setNomeTela(nomeTela)
  }

  return <div>
    <div className="App">
      <header className="App-header">
          {/* <button onClick={handleClick} >Próxima Tela</button> */}
          {nomeTela === "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket} /> : null}
          {nomeTela === "RESULTADOS" ? <Resultados goTo={goTo} result={resultado}/> : null}
          {nomeTela === "ERRO" ? <Erro goTo={goTo} errorMessage={errorMessage}  /> : null}
          {nomeTela === "CARREGANDO" ? <Carregando goTo={goTo} ticket={ticket} /> : null}
      </header>
    </div>
  </div>
}

export default App;
