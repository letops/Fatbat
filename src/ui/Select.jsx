/** global ChevronIcon:false */

import styles from './Select.module.css';
import ChevronIcon from '../assets/chevron-down.svg'
import { useCalculation } from "../contexts/Calculation";
import { createRenderEffect, createSignal } from 'solid-js';

function Select({ options }) {
  const [calculation, { changeWeeks }] = useCalculation();

  function model(el, value) {
    const [field, name, setField] = value();
    createRenderEffect(() => {
      el.value = field[name];
    });
    el.addEventListener("input", (e) => setField(e.target.value));
  }


  return (
    <select
      class={styles.Select}
      disabled={!calculation.commitment}
      style={{ "background-image": `url("${ChevronIcon}")` }}
      use:model={[calculation, 'weeks', changeWeeks]}
    >
      <option value="0" disabled>Select an option...</option>
      <option value="2">2 weeks</option>
      <option value="4">4 weeks</option>
      <option value="6">6 weeks</option>
      <option value="8">8 weeks</option>
      <option value="10">10 weeks</option>
    </select>
  );
}

export default Select;
