import stadiumImage from '../assets/stadium_empty.svg';
import styles from './CalculatorImage.module.css';
import Calculator from '../components/Calculator';

function CalculatorImage() {
  return (
    <div class={styles.CalculatorImage}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div classList={{ [styles.column]: true, [styles.right]: true }}>
          <div class={styles.content}>
            <img src={stadiumImage} />
            <span class={styles.legend}>*This is just a graphic representation of aproximate results</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorImage;
