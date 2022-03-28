import './App.css';
import { FiSearch } from 'react-icons/fi'
import api from '../src/services/api'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')  
  const [cep, setCep] = useState({})
  
  const handleButton = async (e) => {
    e.preventDefault()

    if(input === '') {
      alert('Preencha com algum CEP válido.')
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    }catch(error) {
      alert(`Digite um CEP válido!`)
      setInput('')
      return
    }
    
  }

  return (
    <div className="container">
        <h1 className='title'>Buscador CEP</h1>
        <form className='form'>
          <input 
          type="text" name="cep" id="cep" placeholder='Digite seu cep...' autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button 
          className='button-search'>
          <FiSearch size={25} color='#FFF'
          onClick={handleButton}/>
          </button>
        </form>

        { Object.keys(cep).length > 0 && (
          <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
          </main>
        )}
    </div>
  );
}

export default App;