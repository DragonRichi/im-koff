import classNames from "classnames";
import styles from "../Container/Container.module.scss";

export const Container = ({ children, className }) => (
  <div className={classNames(styles.container, styles[className])}>
    {children}
  </div>
);
