import { useNavigate } from "react-router-dom";
import styles from "../SearchForm/SearchForm.module.scss";

export const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      event.target.reset();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Введите запрос"
        className={styles.input}
      />
      <button className={styles.button} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            // eslint-disable-next-line max-len
            d="M7.66671 13.9999C11.1645 13.9999 14 11.1644 14 7.66659C14 4.16878 11.1645 1.33325 7.66671 1.33325C4.1689 1.33325 1.33337 4.16878 1.33337 7.66659C1.33337 11.1644 4.1689 13.9999 7.66671 13.9999Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6667 14.6666L13.3334 13.3333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};
