import Button from "./components/Button";
import P from "./components/P";
import { useReducer } from "react";

interface CalculatorState {
  currentOperand: string | null;
  previousOperand: string | null;
  operator: string | null;
}

const initialValue: CalculatorState = {
  currentOperand: null,
  previousOperand: null,
  operator: null,
};

function App() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(
    () => initialValue,
    initialValue
  );
  return (
    <main className="mt-12 grid justify-center gap-2 grid-template">
      <section className="col-span-full bg-blue-400 flex flex-col justify-center items-end p-4 rounded">
        <P classes="text-xl text-gray-100">
          {previousOperand} {operator}
        </P>
        <P classes="text-4xl text-white">{currentOperand}</P>
      </section>
      <Button click={() => {}} value="C" span="col-span-2" />
      <Button click={() => {}} value="DE" />
      <Button click={() => {}} value="÷" span="font-mono" />
      <Button click={() => {}} value="1" />
      <Button click={() => {}} value="2" />
      <Button click={() => {}} value="3" />
      <Button click={() => {}} value="*" span="font-mono" />
      <Button click={() => {}} value="4" />
      <Button click={() => {}} value="5" />
      <Button click={() => {}} value="6" />
      <Button click={() => {}} value="-" span="font-mono" />
      <Button click={() => {}} value="7" />
      <Button click={() => {}} value="8" />
      <Button click={() => {}} value="9" />
      <Button click={() => {}} value="+" span="font-mono" />
      <Button click={() => {}} value="." span="font-mono" />
      <Button click={() => {}} value="0" />
      <Button click={() => {}} value="=" span="col-span-2 font-mono" />
    </main>
  );
}

export default App;
