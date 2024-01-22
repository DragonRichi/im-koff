import { Link } from "react-router-dom";
import { API_URL } from "../../const";
import styles from "../CardItem/CardItem.module.scss";
// import { useDispatch } from "react-redux";
// import { fetchAddToCart } from "../../store/cart/cart.slice";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

// eslint-disable-next-line arrow-body-style
export const CardItem = ({ name, images: [image], id, price }) => {
  // const dispatch = useDispatch();
  return (
    <article>
      <Link className={styles.card} to={`/product/${id}`}>
        <img
          src={`${API_URL}/${image}`}
          alt="cardItem"
          className={styles.img}
        />

        <div className={styles.cardInfo}>
          <span className={styles.title}>{name}</span>
          <span className={styles.price}>{price.toLocaleString()}&nbsp;₽</span>
        </div>
      </Link>
      <button className={styles.button}>В корзину</button>
      <FavoriteButton className={styles.like} id={id} />
    </article>
  );
};
