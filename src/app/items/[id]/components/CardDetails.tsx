import styles from "./cardDetails.module.scss";
import CardDetailsSeller from "./CardDetailsSeller";
import CardDetailsProduct from "./CardDetailsProduct";
import Image from "next/image";
import { ProductSeller, Seller } from '../type';

export default function CardDetails({ item, author }: { item: ProductSeller, author: Seller }) {
  return (
    <div className={styles.container_card}>
      <div className={styles.card_image}>
        <Image
          width={180}
          height={180}
          src={item.picture}
          alt={item.title}
          className={styles.details_image}
          data-testid="details_image"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
        />
        <CardDetailsProduct item={item} />
        <CardDetailsSeller item={item} author={author} />
      </div>
      <div className={styles.card_description} data-testid="card_description">
        <h3>Descripción del producto</h3>
        <p>{item.description || "Sin descripción"}</p>
      </div>
    </div>
  );
}