import { Routes, Route } from 'react-router-dom'
import { Home, SecondPage, LoginPage, Register } from './pages/index'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='jobs' element={<SecondPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  )
}
