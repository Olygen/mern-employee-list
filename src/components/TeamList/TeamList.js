import TeamListEmployee from '../TeamListEmployee/TeamListEmployee';
import styles from './TeamList.module.css';

export default function TeamList({ teams, activeTeam, handleSelectTeam }) {
const teamEmployees = teams.map(o =>
  <TeamListEmployee
    team={o}
    isSelected={o === activeTeam}
    handleSelectTeam={handleSelectTeam}
    key={o._id}
  />
);

return (
  <main className={styles.TeamList}>
    {teamEmployees.length ?
      teamEmployees
      :
      <span className={styles.noTeams}>No Previous Teams</span>
    }
  </main>
);
}
