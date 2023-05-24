import styles from './ChoiceListEmployee.module.css';

export default function ChoiceListEmployee({ choiceEmployee, handleAddToTeam }) {
  return (
    <div className={styles.ChoiceListEmployee}>
      <div className={styles.photo + ' ' + 'flex-ctr-ctr'}><img src={choiceEmployee.photo} alt="image" width="100" height="100"/></div>
      <div className={styles.name}>
        {choiceEmployee.name}      
        <br />
        <span style={{ fontSize: '1.1vw' }}>{choiceEmployee.position}</span>
        </div>
      <div className={styles.buy}>
        <span style={{ fontSize: '1vw' }}>Estimated hour cost</span>
        <span>${choiceEmployee.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToTeam(choiceEmployee._id)}>
          ADD
        </button>
      </div>
    </div>
  );
  }