import classNames from "classnames";

import styles from "../Goods/Goods.module.scss";
import { CardItem } from "../../components/CardItem/CardItem";
import { Container } from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product";
import { fetchCart } from "../../store/cart/cart.slice";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const Goods = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) return <ErrorPage error="Загрузка..." />;

  if (error) return <ErrorPage error={error} />;
  return (
    <section className={styles.goods}>
      <Container>
        <h2 className={classNames(styles.title, "visually-hidden")}>
          Список товаров
        </h2>
        <ul className={styles.list}>
          {data.map((item) => (
            <li className={styles.item} key={item.id}>
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
