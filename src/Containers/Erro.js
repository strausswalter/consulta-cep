

function Erro (props) {
    return (
      <>
        <p>Erro na consulta</p>
        <p>{props.errorMessage}</p>
          <button onClick={() => props.goTo("PESQUISA")}>Voltar</button>
      </>
    );
  }

  export default Erro;