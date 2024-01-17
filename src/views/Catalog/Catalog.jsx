import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";

import styles from "../Catalog/Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Загрузка....</div>;

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <nav className={styles.catalog}>
      <Container className="containerCatalog">
        <ul className={styles.list}>
          {data?.map((item, i) => (
            <li key={i}>
              <Link to={`/category?slug=${item}`} className={styles.link}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
