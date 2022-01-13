import styles from "./navBar.module.css"
import Link from "next/link"
function NavBar() {
    return (
        <nav className={`navbar navbar-expand-md bg-primary navbar-dark rounded ${styles.navbar}`}>
            <div className="container-fluid">
                <Link href={`/`}>
                <a className={`navbar-brand ms-3 ${styles.textoPrincipal}`}>FASTLIST</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href={`/tarefas`}>
                            <a  className="nav-link">Tarefas</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={`/tarefas/nova`}>
                            <a  className="nav-link">Criar Tarefa</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;