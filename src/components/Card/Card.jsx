import styles from "../Card/Card.module.scss";

import "swiper/css";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../store/productItem/productItem.slice";

import { ErrorPage } from "../../views/ErrorPage/ErrorPage";
import { Slider } from "../Slider/Slider";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

// eslint-disable-next-line arrow-body-style
export const Card = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { data, error, loading } = useSelector((state) => state.productItem);
  console.log(data);
  const characteristics = data?.characteristics;
  const images = data?.images;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductItem(productId));
    }
  }, [productId, dispatch]);

  if (loading) return <ErrorPage error="Загрузка..." />;

  if (error) return <ErrorPage error={error} />;
  if (!data) return <ErrorPage error="Продукт не найден, попробуйте позже!" />;

  return (
    <section className={styles.card}>
      <Container className="containerCard">
        <div className={styles.flexWrapper}>
          <div className={styles.images}>
            <h2 className={styles.title}>{data?.name}</h2>
            <Slider images={images} data={data} />
          </div>
          <div className={styles.info}>
            <div className={styles.price}>
              {data?.price?.toLocaleString()}&nbsp;₽
            </div>
            <div className={styles.article}>арт.&nbsp;{data?.article}</div>
            <div className={styles.characteristics}>
              <h3 className={styles.charTitle}>Общие характеристики</h3>
              <ul className={styles.list}>
                {characteristics?.map((item) => (
                  <li key={Math.random()} className={styles.item}>
                    <span className={styles.type}>{item[0]}</span>
                    <span className={styles.text}>{item[1]}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.buttons}>
                <button className={styles.button}>В корзину</button>
                <FavoriteButton className={styles.like} id={data.id} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
