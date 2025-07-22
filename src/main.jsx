import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route index={true} path="/" element={<App />} />
        <Route path="/weather/:date" element={<DetailView/>}/>  
    </Route>


  </Routes>
  </BrowserRouter>
  </StrictMode>
)
