'use client';
import Image from "next/image";
import styles from "./searchBox.module.scss";
import iconSearch from "../../../public/icon/icon_search.png";
import { useWithSearchBox } from "./hook/useWithSearchBox";

export default function SearchBox() {
  const {
    isFocused,
    searchText,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = useWithSearchBox();

  return (
    <form onSubmit={handleSubmit} className={`${styles.container_form} ${isFocused ? styles.focused : ""}`}>
      <input
        type="text"
        placeholder="Buscar productos, marcas y más..."
        className={styles.form_inputs}
        data-testid="search-input"
        value={searchText}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit" className={styles.form_button} data-testid="search-button">
        <Image src={iconSearch} alt="icon search" className={styles.button_icon} />
      </button>
    </form>
  );
}