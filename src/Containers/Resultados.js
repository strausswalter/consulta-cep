import CepDados from "../Components/CepDados";


function Resultados (props) {
  const result = props.result;
  return (
    <>
      <p>Resultados para o CEP {result.cep}</p>
      <CepDados cepDados={result} />
        <button onClick={()=>props.goTo("PESQUISA")} >Nova Consulta</button>
    </>
  );
}

export default Resultados;