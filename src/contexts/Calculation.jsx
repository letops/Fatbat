import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const defaultState = {
  commitment: '',
  weeks: '',
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
  });

  const changeCommitment = (commitment) => setState("commitment", commitment);
  const changeWeeks = (weeks) => setState("weeks", weeks);

  return (
    <CalculationContext.Provider value={[state, { changeCommitment, changeWeeks }]}>
      {props.children}
    </CalculationContext.Provider>
  );
};

export const useCalculation = () => useContext(CalculationContext);
