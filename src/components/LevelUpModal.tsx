import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import styles from '../style/components/LevelUpModal.module.css';

export function LevelUpModal(){
  const { level, closeLevelUpModal } = useContext(ChallengesContexts);

  return (
    <div className={styles.LevelUpModalOverlay}>
      <div className={styles.LevelUpModalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo Level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
  );
}