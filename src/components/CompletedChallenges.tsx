import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../style/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
  const { challengesCompleted } = useContext(ChallengesContexts);


  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}