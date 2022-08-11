import styles from './App.module.css';
import CalculatorImage from './variants/CalculatorImage';
import CalculatorLonely from './variants/CalculatorLonely';
import CalculatorLottie from './variants/CalculatorLottie';

function App() {
  return (
    <div class={styles.App}>
      <CalculatorImage />
      <hr />
      <CalculatorLottie />
      <hr />
      <CalculatorLonely />
    </div>
  );
}

export default App;
