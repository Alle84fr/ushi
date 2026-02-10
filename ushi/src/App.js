//import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import SayName from './components/SayName';
import vaca from'./img/ushi_vaca_log.png'
// importa com apelido e depois coloca imagem


function App() {

  const nome = "Pode valor chumbado"
  //retorno apenas com um elemeto pai, deve estar em div ou dentro de ()
  return (
    <div className="App">

      <SayName nome="Ale" />
      <SayName nome="Alo" />
      <SayName nome="Alu" />
      <SayName nome={nome} />

      <Pessoa nomes = "Alee" idade="42" profissão="Revelando" foto={vaca} />

    </div>
  );
}

export default App;
