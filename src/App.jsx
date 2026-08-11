import { Link, Routes, Route } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Sistema Escolar</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Cadastro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alunos">Alunos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/professores">Professores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coordenadores">Coordenadores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diretor">Diretor</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/alunos" element={<ListPage role="aluno" title="Alunos" />} />
          <Route path="/professores" element={<ListPage role="professor" title="Professores" />} />
          <Route path="/coordenadores" element={<ListPage role="coordenador" title="Coordenadores" />} />
          <Route path="/diretor" element={<ListPage role="diretor" title="Diretor" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
