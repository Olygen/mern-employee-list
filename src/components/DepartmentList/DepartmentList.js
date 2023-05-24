// import styles from './DepartmentList.module.css';

// export default function DepartmentList({ departments, activeDep, setActiveDep }) {
//   const deps = departments.map(dep =>
//     <li
//       key={dep}
//       className={dep === activeDep ? styles.active : ''}
//       // FYI, the below will also work, but will give a warning
//       // className={dep === activeDep && 'active'}
//       onClick={() => setActiveDep(dep)}
//     >
//       {dep}
//     </li>
//   );
//   return (
//     <ul className={styles.DepartmentList}>
//       {deps}
//     </ul>
//   );
// }

import styles from './DepartmentList.module.css';

export default function DepartmentList({ departments, activeDep, setActiveDep }) {
// Define the department name for "All" employees
  const allEmployeesDep = "All"; 
// "All" is included in the department options
  const depOptions = [allEmployeesDep, ...departments]; 
  const deps = depOptions.map(dep =>
    <li
      key={dep}
      className={dep === activeDep ? styles.active : ''}
      onClick={() => setActiveDep(dep)}
    >
      {dep}
    </li>
  );

  return (
    <ul className={styles.DepartmentList}>
      {deps}
    </ul>
  );
}
