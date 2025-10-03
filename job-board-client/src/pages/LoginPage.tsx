import { useState } from "react"
import { login } from "../lib/auth"
import type { User } from "../lib/interface"
interface LoginPageProps {
    onLogin: (user: User) => void;
  }

const LoginPage = ({ onLogin }: LoginPageProps) => {
        
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false)

    const handleLogin = async () => {
        setError(false)
        const user = await login(email, password)
        if (user) {
            onLogin(user)
        } else {
            setError(true)
        }
    }

    return (
        <div className="container">
            <div className="section">
                <div className="box">
                    <h1 className="title is-2">Login</h1>
                    <form className="form">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </form>
                    <form className="form">
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </form>
                    <button className="button is-primary is-large" type="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage