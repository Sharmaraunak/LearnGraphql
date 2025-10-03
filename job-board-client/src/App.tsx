
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getUser } from './lib/auth'
import type { User } from './lib/interface'
import NavBar from './components/Navbar'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import CreateJobPage from './pages/CreateJobPage'
import JobPage from './pages/JobPage'
import LoginPage from './pages/LoginPage'

function App() {

 const navigate = useNavigate()
 const [user, setUser] = useState<User | null>(getUser() as User | null)
 
 const logout = () => {
  setUser(null)
  navigate('/login')
 }

 const login = (user: User) => {
  setUser(user)
  navigate('/')
 }
 

 return (
  <>
      <NavBar user={user} logout={logout} />
      <main className="section">
        <Routes>
          <Route index path="/"
            element={<HomePage />}
          />
          <Route path="/companies/:companyId"
            element={<CompanyPage />}
          />
          <Route path="/jobs/new"
            element={<CreateJobPage />}
          />
          <Route path="/jobs/:jobId"
            element={<JobPage />}
          />
          <Route path="/login"
            element={<LoginPage onLogin={login} />}
          />
        </Routes>
      </main>
    </>
 )
 
}

export default App
