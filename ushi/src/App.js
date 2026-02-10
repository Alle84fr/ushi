//import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import vaca from'./img/ushi_vaca_log.png'
// importa com apelido e depois coloca imagem


function App() {

  
  //retorno apenas com um elemeto pai, deve estar em div ou dentro de ()
  return (
    <div className="App">

      <Pessoa nomes = "Alee" idade="42" profissao="Revelando" foto={vaca} />

    </div>
  );
}

export default App;
