import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltersProviders } from './context/filtersContext.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProviders>
  <StrictMode>
    <App />
  </StrictMode>
  </FiltersProviders>
)
