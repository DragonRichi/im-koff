import styles from "../Card/Card.module.scss";

import "swiper/css";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../store/productItem/productItem.slice";

import { ErrorPage } from "../../views/ErrorPage/ErrorPage";
import { Slider } from "../Slider/Slider";

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
                <button className={styles.like}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      // eslint-disable-next-line max-len
                      d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                      fill="white"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
