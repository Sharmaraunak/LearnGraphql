import type { User } from "../lib/interface"

interface NavbarProps {
  user: User | null;
  logout: () => void;
}

const Navbar = ({ user, logout }: NavbarProps) => {

    const isLoggedIn = Boolean(user)
    return <nav className="navbar">
        <div className="navbar-start">
            <a className="navbar-item" href="/">Home</a>
        </div>
        {isLoggedIn && (
            <div className="navbar-end">
            <span className="navbar-item">
                {user?.email}
            </span>
           <p className="navbar-item">
            <a className="button is-primary" href="/jobs/new" >Post  Job</a>
           </p>
           <p className="navbar-item">
            <a className="button is-primary" onClick={logout}>Logout</a>
           </p>
        </div>
        )}
        {!isLoggedIn && (
            <div className="navbar-end">
                <p className="navbar-item">
                    <a className="button is-primary" href="/login">Login</a>
                </p>
            </div>
        )}
    </nav>
}

export default Navbar