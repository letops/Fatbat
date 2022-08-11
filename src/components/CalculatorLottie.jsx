import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorLottie.module.css';
import Calculator from './Calculator';

function CalculatorLottie() {
  return (
    <div class={styles.CalculatorLottie}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div classList={{ [styles.column]: true, [styles.right]: true }}>

          Hi
        </div>
      </div>
    </div>
  );
}

export default CalculatorLottie;
