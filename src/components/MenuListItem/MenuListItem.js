import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}><img src={menuItem.emoji} alt="image" width="100" height="100"/></div>
      <div className={styles.name}>
        {menuItem.name}      
        <br />
        <span style={{ fontSize: '1.1vw' }}>{menuItem.position}</span>
        </div>
      <div className={styles.buy}>
        <span style={{ fontSize: '1vw' }}>Estimated hour cost</span>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
  }