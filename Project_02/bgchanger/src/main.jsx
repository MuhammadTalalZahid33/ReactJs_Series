import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BgChanger from './bgChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BgChanger />
  </StrictMode>,
)
