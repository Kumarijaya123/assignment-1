import styles from "./Card.module.css";

const Card = ({ cardData, title, onClick }) => {
  if (!cardData) return null;
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([k, v]) => (
        <div className={styles.cell}>
          <div className={styles.value}>{k}</div>
          <div className={styles.value}>{v}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
