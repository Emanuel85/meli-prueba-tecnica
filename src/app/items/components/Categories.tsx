
import styles from "../styles/categories.module.scss";
import Link from "next/link";
import MessageCustom from "@/ux-ui/msgCustom/MessageCustom";

interface CategoriesProps {
  categories: string[];
  currentCategory?: string;
}

const Categories = ({ categories, currentCategory }: CategoriesProps) => {
  return (
    <>
      {categories.length !== 0 ? (
        <nav className={styles.container_categories} data-testid="container_navBar">
          <ul className={styles.categories_list}>
            {categories.map((category: string, index: number) => (
              <li key={category} className={styles.list_item}>
                <Link
                  href={`/items?search=${category}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span
                    className={
                      category === currentCategory
                        ? `${styles.list_text} ${styles.active}`
                        : styles.list_text
                    }
                    data-testid={`${category}`}
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
      ) : (
        <MessageCustom
          url_msg={'/imagen/imgError.png'}
          msgPrimary={'No se encontraron resultados'}
          msgSecondary={'Proba con otra búsqueda'} />
      )}
    </>
  );
};

export default Categories;
