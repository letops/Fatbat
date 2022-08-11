import styles from './App.module.css';
import Calculator from './components/Calculator';
import CalculatorImage from './components/CalculatorImage';
import CalculatorLonely from './components/CalculatorLonely';
import CalculatorLottie from './components/CalculatorLottie';

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
