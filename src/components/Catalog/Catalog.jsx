import { Container } from "../../views/Container/Container";
import styles from "../Catalog/Catalog.module.scss";
export const Catalog = () => (
  <section className={styles.catalog}>
    <Container>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.link}>
            Диваны
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Шкафы
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Стулья
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Тумбы
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Кровати
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Столы
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Комоды
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Матрасы
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Пуфики
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Стеллажи
          </a>
        </li>
      </ul>
    </Container>
  </section>
);
