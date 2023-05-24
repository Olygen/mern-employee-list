import styles from './TeamListEmployee.module.css';

export default function TeamListEmployee({ team, isSelected, handleSelectTeam }) {
return (
  <div className={`${styles.TeamListEmployee} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectTeam(team)}>
    <div>
      <div>Team Id: <span className="smaller">{team.teamId}</span></div>
      <div className="smaller">{new Date(team.updatedAt).toLocaleDateString()}</div>
    </div>
    <div className="align-rt">
      <div>${team.teamTotal.toFixed(2)}</div>
      <div className="smaller">{team.totalQty} Employee{team.totalQty > 1 ? 's' : ''}</div>
    </div>
  </div>
);
}
