import styles from './LineEmployee.module.css';

export default function LineEmployee({ lineEmployee, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineEmployee}>
    <div className="flex-ctr-ctr"><img src={lineEmployee.employee.photo} alt="Image" width="50" height="50"/></div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineEmployee.employee.name}</span>
      <span style={{ fontSize: '1vw' }}>{lineEmployee.employee.position}</span>
      <span>{lineEmployee.employee.price.toFixed(2)}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineEmployee.employee._id, lineEmployee.qty - 1)}
        >−</button>
      }
      <span>{lineEmployee.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineEmployee.employee._id, lineEmployee.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineEmployee.extPrice.toFixed(2)}</div>
  </div>
);
}
