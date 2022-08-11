import styles from './Select.module.css';
import ChevronIcon from '../assets/chevron-down.svg'
import { useCalculation } from "../contexts/Calculation";
import { createRenderEffect, createSignal } from 'solid-js';

function Select({ options }) {
  const [calculation, { changeWeeks }] = useCalculation();

  function model(el, value) {
    const [field, name, setField] = value();
    console.log({ field, setField, el, value })
    createRenderEffect(() => {
      el.value = field[name];
    });
    el.addEventListener("input", (e) => setField(e.target.value));
  }

  console.log(ChevronIcon);

  return (
    <select
      class={styles.Select}
      disabled={!calculation.commitment}
      style={{ "background-image": `url("${ChevronIcon}")` }}
      use:model={[calculation, 'weeks', changeWeeks]}
    >
      <option value="0" disabled>Select an option</option>
      <option value="1">Volvo</option>
      <option value="2">Saab</option>
      <option value="3">Mercedes</option>
      <option value="4">Audi</option>
    </select>
  );
}

export default Select;
