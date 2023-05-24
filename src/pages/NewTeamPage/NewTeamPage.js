import { useState, useEffect, useRef } from 'react';
import * as employeesAPI from '../../utilities/employees-api';
import * as teamsAPI from '../../utilities/teams-api';
import styles from './NewTeamPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import ChoiceList from '../../components/ChoiceList/ChoiceList';
import DepartmentList from '../../components/DepartmentList/DepartmentList';
import TeamDetail from '../../components/TeamDetail/TeamDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewTeamPage({ user, setUser }) {
  const [choiceEmployee, setChoiceEmployee] = useState([]);
  const [activeDep, setActiveDep] = useState('All');
  const [group, setGroup] = useState(null);
  const departmentsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getEmployee() {
      console.log('getEmployee');
      const employees = await employeesAPI.getAll();
      console.log(employees);
      //This reduce is looping through our employees
      // and collecting all the departments that exist.
      //It will not duplicate the departments
      departmentsRef.current = employees.reduce((deps, employee) => {
        const dep = employee.department.name;
        return deps.includes(dep) ? deps : [...deps, dep];
      }, []);
      setChoiceEmployee(employees);
      // setActiveDep(departmentsRef.current[0]);
      setActiveDep('All'); // Set active department to "All"
    }
    getEmployee();
    async function getGroup() {
      const group = await teamsAPI.getGroup();
      setGroup(group);
    }
    getGroup();
  }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  /*-- Event Handlers --*/
  async function handleAddToTeam(employeeId) {
    const updatedGroup = await teamsAPI.addEmployeeToGroup(employeeId);
    setGroup(updatedGroup);
  }

  async function handleChangeQty(employeeId, newQty) {
    const updatedGroup = await teamsAPI.setEmployeeQtyInGroup(employeeId, newQty);
    setGroup(updatedGroup);
  }

  async function handleEnough() {
    await teamsAPI.enough();
    navigate('/teams');
  }
console.log('++++++++++++++++++++' + choiceEmployee)

// Filter employees based on active department selection
const filteredEmployees = activeDep !== "All" 
? choiceEmployee.filter(employee => employee.department.name === activeDep) 
: choiceEmployee;
  return (
    <main className={styles.NewTeamPage}>
      <aside>
        <Logo />
        <DepartmentList
          departments={departmentsRef.current}
          activeDep={activeDep}
          setActiveDep={setActiveDep}
        />
        <Link to="/teams" className="button btn-sm">PREVIOUS TEAMS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <ChoiceList
        choiceEmployee={filteredEmployees} // filteredEmployees here
        handleAddToTeam={handleAddToTeam}
      />
      <TeamDetail
        team={group}
        handleChangeQty={handleChangeQty}
        handleEnough={handleEnough}
      />
    </main>
  );
}

