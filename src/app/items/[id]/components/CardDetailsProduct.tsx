import React from 'react'
import styles from './cardDetailsProduct.module.scss'
import { currency } from "../../utils/currency";
import { tax } from "../../utils/tax";
import { ProductSeller } from '../type';

const CardDetailsProduct = ({ item }: { item: ProductSeller }) => {
    const max = 5;
    const pct = Math.max(0, Math.min(item.rating.score / max, 1)) * 100;
    return (
        <div className={styles.card_details}>
            <div>
                <p className={styles.details_sales} data-testid="info_sales">
                    {item.condition === "new" ? "Nuevo" : "Usado"} | {" "}
                    {item.sold_quantity} vendidos
                </p>
            </div>
            <h2 className={styles.details_title} data-testid="info_title">
                {item.title}
            </h2>
            <div className={styles.details_ranking}>
                <span className={styles.ranking_score}>
                    {item.rating.score}
                </span>
                <div className={styles.rating} aria-label={`${item.rating.score.toFixed(1)} de ${max}`}>
                    <div className={`${styles.row} ${styles.base}`} aria-hidden>
                        ★★★★★
                    </div>
                    <div className={`${styles.row} ${styles.fill}`} style={{ width: `${pct}%` }} aria-hidden>
                        ★★★★★
                    </div>
                </div>
                <span className={styles.ranking_count}>
                    {" (" + item.rating.count + ")"}
                </span>
            </div>
            <div className={styles.details_price} data-testid="info_price">
                <span className={styles.price_value}>
                    {currency(item.price.amount, item.price.currency)}
                </span>
                <span className={styles.price_tax}>
                    Precio sin impuestos nacionales {tax(item.price.amount, item.price.currency)}
                </span>
                <button className={styles.price_pago}>
                    Ver los medios de pago
                </button>
            </div>
        </div>
    )
}

export default CardDetailsProduct