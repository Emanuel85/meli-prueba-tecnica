
import Image from "next/image";
import styles from "./header.module.scss";
import SearchBox from "../SearchBox/SearchBox";
import logo from '../../../public/logo/logo_large_plus.webp'
import Link from "next/link";

function HeaderCustom() {
  return (
    <header className={styles.container_header}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <Link href="/" prefetch={false} aria-label="Ir a la página principal">
            <Image
              src={logo}
              alt="Logo"
              className={styles.header_image}
            />
          </Link>
        </div>
        <SearchBox />
      </div>
    </header>
  );
}

export default HeaderCustom;
