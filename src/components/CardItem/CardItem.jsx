import styles from "../CardItem/CardItem.module.scss";

export const CardItem = ({ data }) =>
  data.map((item) => (
    <li className={styles.item} key={item.id}>
      <article>
        <a className={styles.card} href={`/product/${item.id}`}>
          <img src={item.images[0]} alt="cardItem" className={styles.img} />
          <button className={styles.like} aria-label="добавить в избранное">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                // eslint-disable-next-line max-len
                d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58658 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
                fill="currentColor"
                stroke="#1C1C1C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.cardInfo}>
            <span className={styles.title}>{item.name}</span>
            <span className={styles.price}>{item.price}&nbsp;₽</span>
          </div>
          <button className={styles.button}>В корзину</button>
        </a>
      </article>
    </li>
  ));
