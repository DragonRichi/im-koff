import classNames from "classnames";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";

import styles from "../Goods/Goods.module.scss";

export const Goods = () => (
  <section className={styles.goods}>
    <Container>
      <h2 className={classNames(styles.title, "visually-hidden")}>
        Список товаров
      </h2>
      <ul className={styles.list}>
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
    </Container>
  </section>
);
