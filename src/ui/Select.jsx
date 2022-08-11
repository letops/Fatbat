import styles from './Select.module.css';
import { useCalculation } from "../contexts/Calculation";
import { createSignal } from 'solid-js';

function Select({ options }) {
  const [calculation, { changeCommitment }] = useCalculation();

  return (
    <div>

    </div>
  );
}

export default Select;
