 
import { createRoot } from 'react-dom/client'
import 'bulma/css/bulma.css'

import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
