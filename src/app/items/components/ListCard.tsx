import styles from "./listCard.module.scss";
import Card from "./Card";
import { Items } from '../type';

const ListCard = ({ items }: { items: Items[] }) => {
    return (
        <div className={styles.ListCard} data-testid="list-card-container">
            {items.map((item: Items) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};


export default ListCard;