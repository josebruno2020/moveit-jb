import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../style/components/ExperienceBar.module.css';

export function ExperienceBar(){
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContexts);

  const percerntToNextLevel = Math.round(currentExperience*100) / experienceToNextLevel;


  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width:`${percerntToNextLevel}%` }}/>

        <span 
          className={styles.currentExperience} 
          style={{ left:`${percerntToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}