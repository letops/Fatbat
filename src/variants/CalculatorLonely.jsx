import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorLonely.module.css';
import Calculator from '../components/Calculator';
import { CalculationProvider, useCalculation } from "../contexts/Calculation";


function CalculatorLonely() {
  return (
    <div class={styles.CalculatorLonely}>
      <div classList={{[styles.row]: true, [styles.center]: true }}>
        <div class={styles.column}>
          <Calculator />
        </div>
      </div>
    </div>
  );
}


function CalculatorLonelyWrap () {
  return (
    <CalculationProvider>
      <CalculatorLonely />
    </CalculationProvider>
  )
}

export default CalculatorLonelyWrap;
