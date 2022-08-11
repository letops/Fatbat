import logo from './logo.svg';
import styles from './App.module.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div class={styles.column}>

        </div>
      </div>

      <hr />

      <div class={styles.row}>
        <div class={styles.column}>
          <Calculator />

        </div>
        <div class={styles.column}>

        </div>
      </div>

      <hr />

      <div classList={{[styles.row]: true, [styles.center]: true }}>
        <div class={styles.column}>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
