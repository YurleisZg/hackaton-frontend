import React, { useState } from 'react'
import './BarSearch.css'

export default function BarSearch() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<string[]>([])

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      // Simula una petición a un servidor
      const response = await fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error('Error en la búsqueda')
      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error('Error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="¿Qué quieres aprender?"
          className="search-input"
        />
        <button type="submit" className="search-button">
          {/* <Search className="h-4 w-4" /> */}
          <span className="sr-only">Buscar</span>
        </button>
      </form>
      {isLoading && (
        <p className="search-loading">Buscando...</p>
      )}
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li key={index} className="search-result-item">{result}</li>
          ))}
        </ul>
      )}
    </div>
  )
}