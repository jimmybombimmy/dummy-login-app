import { Routes, Route, Navigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'
import Success from './Success/Success'
function App() {

  return (
    <main> 
      <Navbar />
      <section className='routes'>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate to="/login"/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Route>
      </Routes>
      </section>
    </main>
  )
}

export default App
