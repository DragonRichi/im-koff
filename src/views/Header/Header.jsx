import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";

import styles from "../Header/Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Container className="containerHeader">
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);
