import styles from './TeamDetail.module.css';
import LineEmployee from '../LineEmployee/LineEmployee';

// Used to display the details of any team, including the cart (unpaid team)
export default function TeamDetail({ 
    team, 
    handleChangeQty, 
    handleEnough 
}) {
    if (!team) return null;

    const lineEmployees = team.lineEmployees.map(employee =>
      <LineEmployee
        lineEmployee={employee}
        isPaid={team.isPaid}
        handleChangeQty={handleChangeQty}
        key={employee._id}
      />
    );

    return (
      <div className={styles.TeamDetail}>
        <div className={styles.sectionHeading}>
          {team.isPaid ?
            <span>TEAM <span className="smaller">{team.teamId}</span></span>
            :
            <span>NEW TEAM </span>
          }
          <span>{new Date(team.updatedAt).toLocaleDateString()}</span>
        </div>
        <span>Add employee, change hours</span>
        <div className={`${styles.lineEmployeeContainer} flex-ctr-ctr flex-col scroll-y`}>
          {lineEmployees.length ?
            <>
              {lineEmployees}
              <section className={styles.total}>
                {team.isPaid ?
                  <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button
                    className="btn-sm"
                    onClick={handleEnough}
                    disabled={!lineEmployees.length}
                  >TOTAL</button>                  
                }
                <span>{team.totalQty}</span>
                <span className={styles.right}>${team.teamTotal.toFixed(2)}</span>
              </section>
              {team.isPaid ? null :
                <span>Click if OK. Otherwise change number of hours or remove employees by pressing "-" button several times</span>
              }
            </>
            :
            <div className={styles.need}>Add employees from the list to make up new project team</div>
          }
        </div>
      </div>
    );
  }
