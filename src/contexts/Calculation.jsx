import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const training = {
  moderate: {
    time: 15,
    withoutBall: 20,
    withBall: 30,
    multiplier: 0.1,
  },
  good: {
    time: 30,
    withoutBall: 40,
    withBall: 60,
    multiplier: 0.5,
  },
  great: {
    time: 60,
    withoutBall: 80,
    withBall: 120,
    multiplier: 1.1,
  }
}

const improvementBase = {
  avg: 5,
  speed: 7,
  confidence: 6,
  strength: 9,
}

const defaultState = {
  commitment: '',
  weeks: '0',
};

const CalculationContext = createContext([
  defaultState,
  {
    changeCommitment: () => undefined,
    changeWeeks: () => undefined,
  },
]);


export const CalculationProvider = (props) => {
  const [state, setState] = createStore({
    commitment: props.commitment ?? defaultState.commitment,
    weeks: props.weeks ?? defaultState.weeks,
    training,
    improvement: { ...improvementBase },
  });

  const calculateResults = (commitment, weeksStr) => {
    const { avg, speed, confidence, strength } = improvementBase;
    const multiplier = state.training[commitment].multiplier;
    const weeks = parseInt(weeksStr);

    if (weeks) {
      const weeksMultiplier = weeks * 0.25;
      setState("improvement", {
        avg: avg * (multiplier + weeksMultiplier),
        speed: speed * (multiplier + weeksMultiplier),
        confidence: confidence * (multiplier + weeksMultiplier),
        strength: strength * (multiplier + weeksMultiplier),
      })
    }
  }

  const changeCommitment = (commitment) => {
    if (commitment !== state.commitment) {
      setState("commitment", commitment);
      calculateResults(commitment, state.weeks);
    }
  }
  const changeWeeks = (weeks) => {
    if (weeks !== state.weeks) {
      setState("weeks", weeks);
      calculateResults(state.commitment, weeks);
    }
  }

  return (
    <CalculationContext.Provider value={[state, { changeCommitment, changeWeeks }]}>
      {props.children}
    </CalculationContext.Provider>
  );
};

export const useCalculation = () => useContext(CalculationContext);
