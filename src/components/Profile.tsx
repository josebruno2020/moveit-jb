import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../style/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContexts);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/josebruno2020.png" alt="Avatar"/>
      <div>
        <strong>José Bruno</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );

}