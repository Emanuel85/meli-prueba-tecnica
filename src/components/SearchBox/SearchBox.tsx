'use client'
import { useState } from 'react';
import styles from './searchBox.module.scss';
import iconSearch from '../../../public/icon/icon_search.png'
import Image from 'next/image';
const SearchBox = () => {
  
  const [isFocused, setIsFocused] = useState(false);
  return (
    <form className={`${styles.searchForm} ${isFocused ? styles.focused : ''}`}>
      <input
        type='text'
        placeholder='Buscar productos, marcas y más...'
        className={styles.formInputs}
        data-testid='search-input'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type='submit' className={styles.formButton} data-testid='search-button'>
        <Image src={iconSearch} alt='icon search' className={styles.formIcon} />
      </button>
    </form>
  );
};

export default SearchBox;
