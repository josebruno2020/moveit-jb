import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../style/components/ChallengeBox.module.css'

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContexts);
  const { resetCountDown } = useContext(CountDownContext);

  function handleChallengeSucceded(){
    completeChallenge();
    resetCountDown();
  }

  function handleChellengeFailed() {
    resetChallenge();
    resetCountDown();

  }


  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Ganhe XP"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChellengeFailed}
            >
              Falhei
            </button>

            <button 
              type="button"
              className={styles.challengeSuccededButton}
              onClick={handleChallengeSucceded}
            >
              Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de Level completando desafios
        </p>
        </div>
      ) }
      
    </div>
  );
}