
import Image from "next/image";
import styles from "./header.module.scss";
import SearchBox from "../SearchBox/SearchBox";
import logo from '../../../public/logo/logo_large_plus.webp'
import Link from "next/link";

function HeaderCustom() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" prefetch={false} aria-label="Ir a la página principal">
            <Image
              src={logo}
              alt="Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>
        <SearchBox />
      </div>
    </header>
  );
}

export default HeaderCustom;
