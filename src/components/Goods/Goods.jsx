import classNames from "classnames";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";

import styles from "../Goods/Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product";

export const Goods = () => {
  const dispatch = useDispatch();

  const {
    data: dataProduct,
    loading: loadingProduct,
    error: errorProduct,
  } = useSelector((state) => state.product);

  console.log(dataProduct);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loadingProduct) return <div>Загрузка...</div>;

  if (errorProduct) return <div>Ошибка {errorProduct}</div>;
  return (
    <section className={styles.goods}>
      <Container>
        <h2 className={classNames(styles.title, "visually-hidden")}>
          Список товаров
        </h2>
        <ul className={styles.list}>
          <CardItem data={dataProduct} />
        </ul>
      </Container>
    </section>
  );
};
