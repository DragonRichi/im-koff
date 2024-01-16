import { Container } from "../../views/Container/Container";

import styles from "../Catalog/Catalog.module.scss";

export const Catalog = ({ data }) => (
  <nav className={styles.catalog}>
    <Container className="containerCatalog">
      <ul className={styles.list}>
        {data?.map((item, i) => (
          <li key={i}>
            <a href={`/category?slug=${item}`} className={styles.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
