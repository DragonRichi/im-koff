import styles from "../Logo/Logo.module.scss";

export const Logo = () => (
  <a className={styles.link} href="/">
    <img className={styles.logoImg} src="/img/logo.svg" alt="Логотип" />
  </a>
);
