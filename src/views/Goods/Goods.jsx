import classNames from "classnames";

import styles from "../Goods/Goods.module.scss";
import { CardItem } from "../../components/CardItem/CardItem";
import { Container } from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product";
import { fetchCart } from "../../store/cart/cart.slice";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useLocation, useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");
  // const page = searchParam.get("page");

  const { data, loading, error } = useSelector((state) => state.product);

  // const favoriteList = useSelector((item) => item.favorite.favoriteList);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(fetchProduct({ category, q }));
    }

    dispatch(fetchCart());
  }, [dispatch, category, q, location.pathname]);

  if (loading) return <ErrorPage error="Загрузка..." />;

  if (error) return <ErrorPage error={error} />;

  return (
    <section className={styles.goods}>
      <Container className="containerGoods">
        <h2 className={classNames(styles.title, "visually-hidden")}>
          Список товаров
        </h2>
        {data?.length ? (
          <ul className={styles.list}>
            {data?.map((item) => (
              <li className={styles.item} key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <ErrorPage error="По вашему запросу товаров не найдено!" />
        )}
      </Container>
    </section>
  );
};
