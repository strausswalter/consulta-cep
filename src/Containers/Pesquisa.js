import {useState, useEffect} from 'react';
import consultarCep from 'cep-promise'
import CepDados from '../Components/CepDados';

function numbersOnly(str){
  return str.replace(/\D/g, "");
}

function translate(cepDados){
  return{
      "ESTADO": cepDados.state,
      "CIDADE": cepDados.city,
      "BAIRRO": cepDados.neighborhood,
      "LOGRADOURO": cepDados.street,
    }
}


function Pesquisa (props) {
  const goTo = props.goTo;
  const ticket = props.ticket;
  const setResultado = props.setResultado;
  const [cepNumber, setCepNumber] = useState("");
  const [cepFavorito, setCepFavorito] = useState("");
  const [cepDados, setCepDados] = useState({});

  useEffect(() => {
    const storedCed = localStorage.getItem("cepFavorito") || "";
    setCepFavorito(storedCed);
  },[]);//executa no load da pagina 

  useEffect(() => {
    if(!cepFavorito){
      return;
    }
    localStorage.setItem("cepFavorito", cepFavorito);
    consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(err => setCepDados({"ERRO": err.message}))
  },[cepFavorito])//executa no load da pagina e quando o state cepFavorito é modificado



  function handleChange(evt){
    const value = evt.target.value;
    setCepNumber(numbersOnly(value));
  };
  function clear(){
    setCepNumber("");
  }

  function handleSuccess(cepDados){
    const resultado = translate();
    setResultado(resultado);
    goTo("RESULTADOS");
  }

  function handleError(err){
    const errorMessage = err.message;
    props.setErrorMessage(errorMessage);
    props.goTo("ERRO");
  }

  function handleSearch(){
    ticket.current++;
    const currentTicket = ticket.current;
    props.goTo("CARREGANDO");
    consultarCep(cepNumber)
      .then(result => currentTicket === ticket.current && handleSuccess(result))
      .catch(err => currentTicket === ticket.current && handleError(err))
  };

    function handleAdicionarFavorito(){
      // localStorage.setItem("cepFavorito", cepNumber);
      setCepFavorito(cepNumber)
    }

    return (
      <>
        <p>Qual CEP você deseja consultar?</p>
          <input value={numbersOnly(cepNumber)} onChange={handleChange} />
          <button onClick={handleSearch} >Consultar</button>
          <button onClick={handleAdicionarFavorito} >Salvar favorito</button>
          <br />
          <p>Favorito: {cepFavorito}</p>
          <CepDados cepDados={translate(cepDados)} />
      </>
    );
  }

  export default Pesquisa;