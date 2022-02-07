import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import api from './services/api';

import './styles.css'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState('')

  async function handleSearch(e) {

    if (input === '') {
      alert('Preencha o campo de busca')
      return
    }

    try { 
      const response = await (api.get(`${input}`))
      setCep(response.data[0])
      setInput('')
    } catch {
      alert('Código postal não encontrado')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o Código postal"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch size={20} color="#fff" />
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>Código Postal: {cep.CodigoPostal}</h2>
          <span>Morada: {cep.Morada}</span>
          <span>Concelho: {cep.Concelho}</span>
          <span>Distrito: {cep.Distrito}</span>
          <span>Freguesia: {cep.Freguesia}</span>
        </main>
      )}

    </div>
  );
}

export default App;
