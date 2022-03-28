import './App.css';
import { FiSearch } from 'react-icons/fi'

function App() {
  return (
    <div className="container">
        <h1 className='title'>Buscador CEP</h1>
        <form className='form'>
          <input type="text" name="cep" id="cep" placeholder='Digite seu cep...' autoFocus/>
          <button className='button-search'>
              <FiSearch size={25} color='#FFF'/>
          </button>
        </form>

        <div className="main">
          <h2>CEP:99999999</h2>
          <span>Logradouro:</span>
          <span>Complemento:</span>
          <span>Bairro:</span>
          <span>Localidade - UF</span>
        </div>
    </div>
  );
}

export default App;