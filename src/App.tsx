import Button from "./components/Button";
import P from "./components/P";
import { useReducer } from "react";

type StringOrNull = string | null;

interface CalculatorState {
  currentOperand: StringOrNull;
  previousOperand: StringOrNull;
  operator: StringOrNull;
}

const initialValue: CalculatorState = {
  currentOperand: null,
  previousOperand: null,
  operator: null,
};

type ActionType =
  | "add-digit"
  | "clear"
  | "delete"
  | "calculate"
  | "add-operator";

interface CalculatorAction {
  type: ActionType;
  payload?: string;
}

function reducer(state: CalculatorState, action: CalculatorAction) {
  const {
    state: { currentOperand, previousOperand, operator },
    action: { type, payload },
  } = { state, action };
  switch (type) {
    case "add-digit":
      if (payload === "0" && currentOperand === "0") return state;

      if (payload === ".") {
        if (currentOperand === null) return { ...state, currentOperand: "0." };
        if (currentOperand && currentOperand.includes(".")) return state;
      }

      return {
        ...state,
        currentOperand: (currentOperand ?? "") + payload,
      };

    case "clear":
      return initialValue;

    default:
      throw new Error(`No action called ${type}`);
  }
}

function App() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer<
    (state: CalculatorState, action: CalculatorAction) => CalculatorState
  >(reducer, initialValue);

  return (
    <main className="mt-12 grid justify-center gap-2 grid-template">
      <section className="col-span-full bg-blue-400 flex flex-col justify-center items-end p-4 rounded">
        <P classes="text-xl text-gray-100">
          {previousOperand} {operator}
        </P>
        <P classes="text-4xl text-white">{currentOperand}</P>
      </section>
      <Button
        click={() => dispatch({ type: "clear" })}
        value="C"
        span="col-span-2"
      />
      <Button click={() => {}} value="DE" />
      <Button click={() => {}} value="÷" span="font-mono" />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "1" })}
        value="1"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "2" })}
        value="2"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "3" })}
        value="3"
      />
      <Button click={() => {}} value="*" span="font-mono" />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "4" })}
        value="4"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "5" })}
        value="5"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "6" })}
        value="6"
      />
      <Button click={() => {}} value="-" span="font-mono" />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "7" })}
        value="7"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "8" })}
        value="8"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "9" })}
        value="9"
      />
      <Button click={() => {}} value="+" span="font-mono" />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "." })}
        value="."
        span="font-mono"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "0" })}
        value="0"
      />
      <Button click={() => {}} value="=" span="col-span-2 font-mono" />
    </main>
  );
}

export default App;
