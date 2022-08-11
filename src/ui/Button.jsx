import styles from './Button.module.css';
import { useCalculation } from "../contexts/Calculation";

function Button({ key, children }) {
  const [calculation, { changeCommitment }] = useCalculation();

  return (
    <button
      classList={{
        [styles.Button]: true,
        [styles.selected]: calculation.commitment === key
      }}
      onClick={(e) => { changeCommitment(key); }}
    >
      {children}
    </button>
  );
}

export default Button;
