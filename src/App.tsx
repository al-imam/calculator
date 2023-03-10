import Button from "./components/Button";
import P from "./components/P";
import { useReducer } from "react";

type StringOrNull = string | null;
type Operator = "+" | "-" | "÷" | "*" | null;

interface CalculatorState {
  currentOperand: StringOrNull;
  previousOperand: StringOrNull;
  operator: Operator;
  override: boolean;
}

const initialValue: CalculatorState = {
  currentOperand: null,
  previousOperand: null,
  operator: null,
  override: false,
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

type NoUndefinedField<T> = {
  [P in keyof T]: NoUndefinedField<NonNullable<T[P]>>;
};

function calculate(state: NoUndefinedField<CalculatorState>): number {
  const { operator } = state;
  const currentOperand = parseFloat(state.currentOperand);
  const previousOperand = parseFloat(state.previousOperand);

  switch (operator) {
    case "+":
      return previousOperand + currentOperand;

    case "-":
      return previousOperand - currentOperand;

    case "÷":
      return previousOperand / currentOperand;

    case "*":
      return previousOperand * currentOperand;

    default:
      throw new Error(`Can not compute ${operator}`);
  }
}

function reducer(state: CalculatorState, action: CalculatorAction) {
  const {
    state: { currentOperand, previousOperand, operator, override },
    action: { type, payload },
  } = { state, action };

  switch (type) {
    case "add-digit":
      if (override) {
        return { ...state, override: false, currentOperand: payload as string };
      }

      if (currentOperand === "0" && payload !== ".") {
        return {
          ...state,
          currentOperand: payload as string,
        };
      }

      if (payload === ".") {
        if (currentOperand === null) return { ...state, currentOperand: "0." };
        if (currentOperand && currentOperand.includes(".")) return state;
      }

      return {
        ...state,
        currentOperand: (currentOperand ?? "") + payload,
      };

    case "add-operator":
      if (currentOperand === null && previousOperand === null) return state;

      if (currentOperand === null) {
        return {
          ...state,
          operator: payload as Exclude<Operator, null>,
        };
      }

      if (parseFloat(currentOperand || "0") === 0) return state;

      if (currentOperand !== null && previousOperand !== null) {
        return {
          override: true,
          operator: payload as Exclude<Operator, null>,
          currentOperand: null,
          previousOperand: `${calculate(
            state as NoUndefinedField<CalculatorState>
          )}`,
        };
      }

      return {
        ...state,
        operator: payload as Exclude<Operator, null>,
        previousOperand: currentOperand,
        currentOperand: null,
      };

    case "calculate":
      if (
        operator === null ||
        parseFloat(currentOperand || "0") === 0 ||
        previousOperand === null
      ) {
        return state;
      }

      return {
        override: true,
        operator: null,
        previousOperand: null,
        currentOperand: `${calculate(
          state as NoUndefinedField<CalculatorState>
        )}`,
      };

    case "delete":
      if (override) {
        return { ...state, currentOperand: null, override: false };
      }

      if (currentOperand === null) return state;

      if (currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }

      return {
        ...state,
        currentOperand: currentOperand.slice(0, -1),
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
      <Button click={() => dispatch({ type: "delete" })} value="DE" />
      <Button
        click={() => dispatch({ type: "add-operator", payload: "÷" })}
        value="÷"
        span="font-mono"
      />
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
      <Button
        click={() => dispatch({ type: "add-operator", payload: "*" })}
        value="*"
        span="font-mono"
      />
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
      <Button
        click={() => dispatch({ type: "add-operator", payload: "-" })}
        value="-"
        span="font-mono"
      />
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
      <Button
        click={() => dispatch({ type: "add-operator", payload: "+" })}
        value="+"
        span="font-mono"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "." })}
        value="."
        span="font-mono"
      />
      <Button
        click={() => dispatch({ type: "add-digit", payload: "0" })}
        value="0"
      />
      <Button
        click={() => dispatch({ type: "calculate" })}
        value="="
        span="col-span-2 font-mono"
      />
    </main>
  );
}

export default App;
