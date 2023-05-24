import styles from './TeamHistoryPage.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as teamsAPI from '../../utilities/teams-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import TeamList from '../../components/TeamList/TeamList';
import TeamDetail from '../../components/TeamDetail/TeamDetail';

export default function TeamHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [teams, setTeams] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous teams (paid)
    async function fetchTeamHistory() {
      const teams = await teamsAPI.getTeamHistory();
      setTeams(teams);
      // If no teams, activeTeam will be set to null below
      setActiveTeam(teams[0] || null);
    }
    fetchTeamHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectTeam(team) {
    setActiveTeam(team);
  }

  /*--- Rendered UI --- */
  return (
    <main className={styles.TeamHistoryPage}>
      <aside className={styles.aside}>
        <Logo />
        <Link to="/teams/new" className="button btn-sm">NEW TEAM</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>

      {/* This components below are listing state   */}
      <TeamList
        teams={teams}
        activeTeam={activeTeam}
        handleSelectTeam={handleSelectTeam}
      />
      <TeamDetail
        team={activeTeam}
      />
    </main>
  );
}
