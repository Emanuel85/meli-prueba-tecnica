import Image from "next/image";
import styles from "./header.module.scss";
import SearchBox from "../SearchBox/SearchBox";
import logo from '../../../public/logo/logo_large_plus.webp'

function HeaderCustom() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        alt="Logo"
                        className={styles.logoImage}
                    />
                </div>
                <SearchBox />
            </div>
        </header>
    );
}

export default HeaderCustom;
