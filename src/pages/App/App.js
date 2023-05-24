import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewTeamPage from '../NewTeamPage/NewTeamPage';
import TeamHistoryPage from '../TeamHistoryPage/TeamHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/teams/new" element={<NewTeamPage user={user} setUser={setUser} />} />
            <Route path="/teams" element={<TeamHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /teams/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/teams/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}