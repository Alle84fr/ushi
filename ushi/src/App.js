//import logo from './logo.svg';
import './App.css';
// importa com apelido e depois coloca imagem
import vaca from './img/ushi_vaca_log.png';
import Saluton from './components/Saluton';
import Frase from './components/Frase';

function App() {

  
  //retorno apenas com um elemeto pai, deve estar em div ou dentro de ()
  return (
    <div className="App">
      <h1>Saluton Cominkanto</h1>
      <img src={vaca} alt="Vaquinha" />

      <Saluton/>

      <Frase></Frase>
      </div>
  );
}

export default App;
