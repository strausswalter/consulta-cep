import logo from './logo.svg';
import './App.css';
import Pesquisa from './Containers/Pesquisa'
import Erro from './Containers/Erro'
import Carregando from './Containers/Carregando'
import Resultados from './Containers/Resultados'





function App() {
  return <Resultados result={{
    "Rua": "Rua das Margaridas",
    "Bairro": "Vila Mariana",
    "Cidade": "São Paulo",
    "Estado": "SP",
  }}/>
}

export default App;
