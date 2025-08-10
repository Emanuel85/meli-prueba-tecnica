
import styles from "./card.module.scss";
import { currency } from "../utils/currency";
import Link from "next/link";
import Image from "next/image";
import { Items }from '../type'

function Card({ item }: { item: Items }) {
  return (
    <Link href={`/items/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.container_card}>
        <Image
          width={180}
          height={180}
          src={item.picture}
          alt={item.title}
          className={styles.card_image}
          data-testid="test-image"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        />
        <div className={styles.card_info}>
          <div className={styles.info_details}>
            <h3 className={styles.info_title} data-testid="info_title">
              {item.title}
            </h3>
            <h2 className={styles.details_price} data-testid="details_price">
              {currency(item.price.amount, item.price.currency)}
            </h2>
            {item.free_shipping ? <span className={styles.details_shipping} data-testid="details_shipping">
              Llega gratis el lunes
            </span> : null}
          </div>
        </div>
      </div>
    </Link>
  );
}


export default Card;
