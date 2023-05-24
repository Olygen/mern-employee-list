import styles from './ChoiceList.module.css';
import ChoiceListEmployee from '../ChoiceListEmployee/ChoiceListEmployee';

export default function ChoiceList({ choiceEmployee, handleAddToTeam }) {
  console.log('choiceEmployees');
  console.log(choiceEmployee);

  let employees = "<h1>no employees</h1>"
  if (choiceEmployee){

   employees = choiceEmployee.map(employee =>
    <ChoiceListEmployee
      key={employee._id}
      handleAddToTeam={handleAddToTeam}
      choiceEmployee={employee}
    />
  );

  };
   return (
    <main className={styles.ChoiceList}>
      {employees}
    </main>
  );
}
