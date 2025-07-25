import Link from 'next/link';
import { FaHeartbeat } from "react-icons/fa";
import styles from './Header.module.css';
export default function Header() {
    return (
        <div>

    <header className={styles.headerContainer}>
      <Link href="/" legacyBehavior>
        <a className={styles.logoContainer}>
          <span className={styles.logoIcon}><FaHeartbeat /></span>
          <span className={styles.logoText}>DOE+</span>
        </a>
      </Link>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/para-doadores">Para Doadores</Link>
          </li>
          <li>
            <Link href="/para-hemocentros">Para Hemocentros</Link>
          </li>
          <li>
            <Link href="/unidades">Unidades</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.actionButtons}>
        <Link href="/login" passHref>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Entrar</button>
        </Link>
        <Link href="/cadastro" passHref>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Cadastrar</button>
        </Link>
      </div>
    </header>
  ;
;

export default Header;
        </div>
    )
}