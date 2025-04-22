import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export const Header = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt=""/>
        </nav>
    )
}