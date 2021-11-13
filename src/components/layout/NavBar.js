import { Link } from 'react-router-dom'

import Container from './Container'

import logo from '../../img/costs_logo.png'

import styles from './NavBar.module.css'

function NavBar() {
    return(
    <nav className={styles.navbar}>
        <Container>
            <Link to="/">
                <img src={logo} alt="costs"/>
            </Link>
            <ul className={styles.list}>
                <li><Link to="/" className={styles.item}>Home</Link></li>
                <li><Link to="/projects" className={styles.item}>Projetos</Link></li>
                <li><Link to="/company" className={styles.item}>Empresa</Link></li>
                <li><Link to="/contact" className={styles.item}>Contato</Link></li>
            </ul>
        </Container>
    </nav>
    )
}

export default NavBar