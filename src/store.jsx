import React, { createContext, useContext, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(name, role) {
    if (!name.trim()) return
    setItems(prev => [...prev, { id: Date.now(), name: name.trim(), role }])
  }

  return (
    <StoreContext.Provider value={{ items, addItem }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
