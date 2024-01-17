import { Link } from "react-router-dom";
import styles from "../Logo/Logo.module.scss";

export const Logo = () => (
  <Link className={styles.link} to="/">
    <img className={styles.logoImg} src="/img/logo.svg" alt="Логотип" />
  </Link>
);
