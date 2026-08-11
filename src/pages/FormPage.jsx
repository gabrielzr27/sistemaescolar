import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'

export default function FormPage() {
  const [name, setName] = useState('')
  const { addItem } = useStore()
  const navigate = useNavigate()
  const isDisabled = !name.trim()

  function handleSave(role, route) {
    if (isDisabled) return
    addItem(name, role)
    setName('')
    navigate(route)
  }

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="mb-3">Novo Cadastro</h3>
      <p className="text-muted mb-4">Informe o nome e escolha a função para armazenar na lista global.</p>

      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite o nome"
        />
      </div>

      <div className="row g-2">
        <div className="col-6 col-md-3">
          <button
            className="btn btn-primary w-100"
            type="button"
            disabled={isDisabled}
            onClick={() => handleSave('aluno', '/alunos')}
          >
            Salvar Aluno
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button
            className="btn btn-secondary w-100"
            type="button"
            disabled={isDisabled}
            onClick={() => handleSave('professor', '/professores')}
          >
            Salvar Professor
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button
            className="btn btn-success w-100"
            type="button"
            disabled={isDisabled}
            onClick={() => handleSave('coordenador', '/coordenadores')}
          >
            Salvar Coordenador
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button
            className="btn btn-danger w-100"
            type="button"
            disabled={isDisabled}
            onClick={() => handleSave('diretor', '/diretor')}
          >
            Salvar Diretor
          </button>
        </div>
      </div>
    </div>
  )
}
