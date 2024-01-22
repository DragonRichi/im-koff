import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Link } from "react-router-dom";
// import { SwiperSlide, Swiper } from "swiper/react";
// import { Pagination } from "swiper/modules";
import styles from "../Catalog/Catalog.module.scss";
import { ErrorPage } from "../ErrorPage/ErrorPage";
// import "swiper/css";
export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <ErrorPage error="Загрузка..." />;

  if (error) return <ErrorPage error={error} />;

  return (
    <nav className={styles.catalog}>
      <Container className="containerCatalog">
        <ul className={styles.list}>
          {/* <Swiper modules={[Pagination]} className={styles.scroll}> */}
          {data?.map((item, i) => (
            // <SwiperSlide >
            <li key={i}>
              <Link to={`/category?category=${item}`} className={styles.link}>
                {item}
              </Link>
            </li>
            // </SwiperSlide>
          ))}
          {/* </Swiper> */}
        </ul>
      </Container>
    </nav>
  );
};
