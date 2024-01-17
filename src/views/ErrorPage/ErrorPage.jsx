import { Container } from "../Container/Container";
import styles from "../ErrorPage/ErrorPage.module.scss";

export const ErrorPage = ({ error }) => (
  <section className={styles.errorPage}>
    <Container>
      <div className={styles.info}>{error}</div>
    </Container>
  </section>
);
