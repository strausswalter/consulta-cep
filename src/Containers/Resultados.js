

function Resultados (props) {
  const result = props.result;

  const keys = Object.keys(result);
  const elements = keys.map(key => (
    
      <span key={key}><b>{key}: </b>{result[key]}</span>
    
  ))
    return (
      <div className="App">
        <header className="App-header">
        <p>Resultados para o CEP 22230-060</p>
        {elements}
          <button>Cancelar</button>
        </header>
      </div>
    );
  }


//         <span><b>Rua: </b>Marques de Abrantes</span>
//<span><b>Cidade: </b>Rio de Janeiro</span>



  export default Resultados;