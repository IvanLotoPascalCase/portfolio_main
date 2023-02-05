// IMPORT DE LIBRERIAS:
import { Routes, Route } from 'react-router-dom';

// IMPORT DE PAGINAS:
import HomePage from './pages/HomePage.jsx';

// APLICACIÓN BASE
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default App