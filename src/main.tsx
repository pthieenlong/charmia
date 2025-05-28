import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Provider from './app/Provider'
import '@/assets/styles/index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider />
  </StrictMode>,
)
