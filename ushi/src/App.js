//import logo from './logo.svg';
import './App.css';
// importa com apelido e depois coloca imagem
import vaca from './img/ushi_vaca_log.png'

function App() {

  function se(a){
    if(a>10){
      a=11
    }
    else{
      a=45
    }
    return a
  }

  const name = "Alê"

  //retorno apenas com um elemeto pai, deve estar em div ou dentro de ()
  return (
    <div className="App">
      <h1>Saluton Cominkanto</h1>
      <p>Relembran do React</p>
      <p>Curso do React - Matheus Battisti - Hora de codar - #2</p>
      <p>aluna {name} </p>
      <p>soma {2+9}</p>
      <p>se : {se(2)}</p>
      <img src={vaca} alt="Vaquinha" />
      </div>
  );
}

export default App;
