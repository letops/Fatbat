import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorImage.module.css';
import Calculator from './Calculator';

function CalculatorImage() {
  return (
    <div class={styles.CalculatorImage}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div classList={{ [styles.column]: true, [styles.right]: true }}>
          <img src={stadiumImage} />
        </div>
      </div>
    </div>
  );
}

export default CalculatorImage;
