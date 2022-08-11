import { Show } from "solid-js";
import { createSignal } from "solid-js";
import { CalculationProvider, useCalculation } from "../contexts/Calculation";

import Button from '../ui/Button';
import Collapsable from "../ui/Collapsable";
import Select from '../ui/Select';
import styles from './Calculator.module.css';

function Calculator() {
  const [calculation, { changeCommitment }] = useCalculation();

  return (
    <div class={styles.Calculator}>
      <h2>Select your training commitment</h2>
      <div class={styles.row}>
        <Button key='moderate'>
          Moderate
        </Button>
        <Button key='good'>
          Good
        </Button>
        <Button key='great'>
          Great
        </Button>
      </div>

      <Show when={calculation.commitment}>
        <Collapsable title='Your training regime'>
          <div class={styles.row}>
            <span>Training Time (daily)</span>
            <span><strong>30 min</strong></span>
          </div>
          <hr />
          <div class={styles.row}>
            <span>Batting Drills (no ball)</span>
            <span><strong>40 reps</strong></span>
          </div>
          <hr />
          <div class={styles.row}>
            <span>Batting Drills (with ball)</span>
            <span><strong>60 reps</strong></span>
          </div>
        </Collapsable>
      </Show>

      <h2>Select the number of weeks you would  like to train</h2>
      <div class={styles.row}>
        <Select />
      </div>

      <Show when={calculation.weeks && calculation.weeks !== '0'}>
        <Collapsable title='Training expected results'>
          <div class={styles.row}>
            <span>Bating average</span>
            <span><strong>15%</strong></span>
          </div>
          <hr />
          <div class={styles.row}>
            <span>Exit Speed</span>
            <span><strong>20%</strong></span>
          </div>
          <hr />
          <div class={styles.row}>
            <span>Confidence</span>
            <span><strong>30%</strong></span>
          </div>
          <hr />
          <div class={styles.row}>
            <span>Grip Strenght</span>
            <span><strong>25%</strong></span>
          </div>
        </Collapsable>
      </Show>
    </div>
  );
}

function CalculatorWrap () {
  return (
    <CalculationProvider>
      <Calculator />
    </CalculationProvider>
  )
}

export default CalculatorWrap;
