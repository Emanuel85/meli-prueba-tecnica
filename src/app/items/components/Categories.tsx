
import styles from "./categories.module.scss";
import Link from "next/link";

const Categories = ({ categories }: { categories: string[] }) => {
  console.log('CATEGORIE',categories)
  return (
    <>
      {categories.length !== 0
        ? <nav className={styles.container_navBar} data-testid="container_navBar">
          <ul className={styles.navBar_list}>
            {categories.map((category: string, index: number) => (
              <li key={category} className={styles.list_item}>
                <Link href={`/items?search=${category}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <span
                    className={styles.list_text}
                  >
                    {category}
                  </span>
                </Link>
                {index < categories.length - 1 && (
                  <span className={styles.list_separator}>›</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        : <nav className={styles.container_navBar}>
          <ul className={styles.navBar_list}>
            <li className={styles.list_item}>
              <span className={styles.no_list_text}>
                No existen categorias disponibles
              </span>
            </li>
          </ul>
        </nav>
      }</>
  );
};

export default Categories;
