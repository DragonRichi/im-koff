import styles from "../Developers/Developers.module.scss";

export const Developers = () => (
  <ul className={styles.developers}>
    <li className={styles.item}>
      Designer:&nbsp;
      <a
        className={styles.link}
        href="https://t.me/"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={styles.item}>
      Designer:&nbsp;
      <a
        className={styles.link}
        href="https://t.me/richi"
        target="_blank"
        rel="noreferrer">
        Richi
      </a>
    </li>
  </ul>
);
