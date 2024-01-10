import { Container } from "../../views/Container/Container";
import styles from "../Order/Order.module.scss";
import img from "../../assets/photo.png";

export const Order = () => (
  <div className={styles.order}>
    <Container className="containerOrder">
      <div className={styles.ticket}>
        <h2 className={styles.title}>Корзина</h2>
        <div className={styles.cartItem}>
          <img src={img} alt="cart" className={styles.cartImg} />
          <div className={styles.cartItemInfo}>
            <div className={styles.itemWrapper}>
              <h3 className={styles.itemTitle}>Кресло с подлокотниками</h3>
              <div className={styles.itemArt}>арт. 84348945757</div>
              <div className={styles.itemCount}>
                <button className={styles.itemDelete}>-</button>
                <p>1</p>
                <button className={styles.itemAdd}>+</button>
              </div>
            </div>
            <div className={styles.price}>5 000 ₽</div>
          </div>
        </div>
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.orderTitle}>Данные для доставки</legend>
            <div className={styles.formInputs}>
              <input
                type="text"
                placeholder="Фамилия Имя Отчество"
                className={styles.fio}
              />
              <input
                type="text"
                placeholder="Телефон"
                className={styles.phone}
              />
              <input
                type="email"
                placeholder="E-mail"
                className={styles.email}
              />
              <input
                type="text"
                placeholder="Адрес доставки"
                className={styles.address}
              />
              <textarea
                className={styles.comment}
                name="comment"
                placeholder="Комментарий к заказу"></textarea>
            </div>
          </fieldset>
          <div className={styles.select}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.deliveryTitle}>Доставка</legend>
              <div className={styles.selectWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#1C1C1C" />
                </svg>
                <label htmlFor="delivery">Доставка</label>
              </div>
              <div className={styles.selectWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#1C1C1C" />
                </svg>
                <label htmlFor="delivery">Самовывоз</label>
              </div>
            </fieldset>
            <fieldset className={styles.fieldset}>
              <legend className={styles.deliveryTitle}>Оплата</legend>
              <div className={styles.selectWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#1C1C1C" />
                </svg>
                <label htmlFor="pay">Картой при получении</label>
              </div>
              <div className={styles.selectWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <circle cx="8" cy="8" r="5.5" stroke="#1C1C1C" />
                </svg>
                <label htmlFor="pay">Наличными при получении</label>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
      <div className={styles.sendOrder}>
        <h3 className={styles.sendOrderTitle}>Оформление</h3>
        <div className={styles.orderInfo}>
          <div className={styles.amountOrder}>4 товара на сумму:</div>
          <div className={styles.priceOrder}>20 000 ₽</div>
        </div>
        <div className={styles.infoDelivery}>Доставка 0 ₽</div>
        <div className={styles.button}>
          <button className={styles.orderButton}>Оформить заказ</button>
        </div>
      </div>
    </Container>
  </div>
);
