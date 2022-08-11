import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorLonely.module.css';
import Calculator from './Calculator';

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

export default CalculatorLonely;
