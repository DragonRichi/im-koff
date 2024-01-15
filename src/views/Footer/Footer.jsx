import { Contacts } from "../../components/Contacts/Contacts";
import { Developers } from "../../components/Developers/Developers";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";

import styles from "../Footer/Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className="containerFooter">
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.contacts}>
        <Contacts />
      </div>
      <div className={styles.developers}>
        <Developers />
      </div>
      <div className={styles.copyright}>© Koff, 2024 </div>
    </Container>
  </footer>
);
