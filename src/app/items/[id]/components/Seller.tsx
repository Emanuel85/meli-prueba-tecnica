import React from 'react'
import styles from '../styles/seller.module.scss'
import { currency } from "../../utils/currency";
import { tax } from "../../utils/tax";
import { ProductSeller, ISeller } from '../type';

const Seller = ({ item, author }: { item: ProductSeller, author: ISeller }) => {
    return (
        <div className={styles.card_info}>
            <div>
                <p className={styles.info_sales} data-testid="info_sales">
                    Mejor precio
                </p>
            </div>
            <div className={styles.info_price} data-testid="info_price">
                <span className={styles.info_price_value}>
                    {currency(item.price.amount, item.price.currency)}
                </span>
                <span className={styles.info_tax_value}>
                    Precio sin impuestos nacionales {tax(item.price.amount, item.price.currency)}
                </span>
            </div>
            <div className={styles.info_shipping}>
                <p className={styles.shipping_text_free} data-testid="info_shipping">
                    Llega gratis{" "}
                    {item.free_shipping
                        ? <span className={styles.shipping_text_free_secondary} data-testid="shipping_text_secondary">
                            el lunes
                        </span>
                        : <span className={styles.shipping_text_free_secondary} data-testid="shipping_text_secondary">
                            mañana
                        </span>}
                </p>
                <p className={styles.shipping_text_withdraw} data-testid="info_shipping">
                    Retira gratis{" "}
                    {item.free_shipping
                        ? <span className={styles.shipping_text_withdraw_secondary} data-testid="shipping_text_secondary">
                            entre el lunes y el martes
                        </span>
                        : <span className={styles.shipping_text_withdraw_secondary} data-testid="shipping_text_secondary">
                            entre el miercoles y el jueves
                        </span>}
                </p>
                <button className={styles.shipping_map} data-testid="info_button">
                    Ver en Mapa
                </button>
            </div>
            <div className={styles.info_stock} data-testid="info_price">
                <span className={styles.stock_title}>
                    Stock Disponibles
                </span>
                <div className={styles.stock_select}>
                    <span className={styles.title}>
                        Cantidad: {" "}
                    </span>
                    <select className={styles.select} data-testid="select_sold_quantity">
                        {Array.from({ length: item.sold_quantity }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1} Unidad
                            </option>
                        ))}
                    </select>
                    <span className={styles.tax_value}>
                        ({item.sold_quantity} {" "} disponible)
                    </span>
                </div>

            </div>
            <div className={styles.info_buttons}>
                <button className={styles.button_sell} data-testid="info_button">
                    Comprar ahora
                </button>
                <button className={styles.button_add} data-testid="info_button">
                    Agregar al carrito
                </button>
            </div>
            <div className={styles.info_seller}>
                <div className={styles.seller_details}>
                    <p className={styles.details_text} data-testid="info_shipping">
                        {"Vendido" + " " + "por"}
                    </p>
                    <button className={styles.details_text_secondary} data-testid="info_shipping">
                        {author.name.toUpperCase() + author.lastname.toUpperCase()}
                    </button>
                </div>
                <p className={styles.details_sell_amount} data-testid="info_shipping">
                    {"+" + (item.sold_quantity * 2) + " ventas"}
                </p>
                <p className={styles.details_sell_check} data-testid="info_shipping">
                    {"Hace Factura A"}
                </p>
            </div>
        </div>
    )
}

export default Seller