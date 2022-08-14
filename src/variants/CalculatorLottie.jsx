import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorLottie.module.css';
import Calculator from '../components/Calculator';
import { CalculationProvider, useCalculation } from "../contexts/Calculation";


function CalculatorLottie() {
  return (
    <div class={styles.CalculatorLottie}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div classList={{ [styles.column]: true, [styles.right]: true }}>
          <div class={styles.content}>


            <span class={styles.legend}>*This is just a graphic representation of aproximate results</span>
          </div>
        </div>
      </div>
    </div>
  );
}


function CalculatorLottieWrap () {
  return (
    <CalculationProvider>
      <CalculatorLottie />
    </CalculationProvider>
  )
}

export default CalculatorLottieWrap;
