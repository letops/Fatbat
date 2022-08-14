import redArea from '../assets/red-area.png';
import stadiumImage from '../assets/stadium.png';
import stadiumScore from '../assets/no-area.png';
import styles from './CalculatorImage.module.css';
import Calculator from '../components/Calculator';
import { CalculationProvider, useCalculation } from "../contexts/Calculation";

function CalculatorImage() {
  const [calculation] = useCalculation();

  return (
    <div class={styles.CalculatorImage}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div classList={{ [styles.column]: true, [styles.right]: true }}>
          <div class={styles.content}>
            <div
              class={styles.img}
              style={{ "background-image": `url("${stadiumImage}")` }}
            >
              <div
                classList={{ [styles.imgOverlay]: true, [styles.pulse]: true, [styles.show]: calculation.improvement.avg >= 11 }}
                style={{ "background-image": `url("${redArea}")` }}
              />
              <div
                classList={{ [styles.imgOverlay]: true, [styles.pulse]: true, [styles.show]: calculation.improvement.avg >= 7}}
                style={{
                  "background-image": `url("${redArea}")`,
                  "height": "75%",
                  "width": "75%",
                  "bottom": "9%",
                }}
              />
              <div
                classList={{ [styles.imgOverlay]: true, [styles.pulse]: true, [styles.show]: calculation.improvement.avg >= 3 }}
                style={{
                  "background-image": `url("${redArea}")`,
                  "height": "50%",
                  "width": "50%",
                  "bottom": "18%",
                }}
              />
              <div
                classList={{ [styles.imgOverlay]: true, [styles.show]: true }}
                style={{ "background-image": `url("${stadiumScore}")` }} />
            </div>
            <span class={styles.legend}>*This is just a graphic representation of aproximate results</span>
          </div>
        </div>
      </div>
    </div>
  );
}


function CalculatorImageWrap () {
  return (
    <CalculationProvider>
      <CalculatorImage />
    </CalculationProvider>
  )
}


export default CalculatorImageWrap;
