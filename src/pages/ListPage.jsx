import { useState } from 'react'
import { useStore } from '../store'

const PAGE_SIZE = 5

export default function ListPage({ role, title }) {
  const { items } = useStore()
  const list = items.filter(item => item.role === role)
  const [page, setPage] = useState(1)

  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE))
  const startIndex = (page - 1) * PAGE_SIZE
  const pageItems = list.slice(startIndex, startIndex + PAGE_SIZE)

  function handlePage(newPage) {
    setPage(newPage)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="card shadow-sm p-4 mb-4">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th style={{ width: '5rem' }}>#</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 ? (
              <tr>
                <td colSpan={2}>Nenhum registro.</td>
              </tr>
            ) : (
              pageItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{startIndex + index + 1}</td>
                  <td>{item.name}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <nav>
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
              <button className="page-link" type="button" onClick={() => handlePage(page - 1)}>Anterior</button>
            </li>
            {Array.from({ length: pages }, (_, index) => (
              <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
                <button className="page-link" type="button" onClick={() => handlePage(index + 1)}>{index + 1}</button>
              </li>
            ))}
            <li className={`page-item ${page === pages ? 'disabled' : ''}`}>
              <button className="page-link" type="button" onClick={() => handlePage(page + 1)}>Próxima</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
