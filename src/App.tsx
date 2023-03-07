import Button from "./components/Button";
import P from "./components/P";

function App() {
  return (
    <main className="mt-12 grid justify-center gap-2">
      <section>
        <P>10000 + {/* demo text */}</P>
        <P>10000 {/* demo text */}</P>
      </section>
      <Button click={() => {}} value="C" />
      <Button click={() => {}} value="DE" />
      <Button click={() => {}} value="/" />
      <Button click={() => {}} value="1" />
      <Button click={() => {}} value="2" />
      <Button click={() => {}} value="3" />
      <Button click={() => {}} value="*" />
      <Button click={() => {}} value="4" />
      <Button click={() => {}} value="5" />
      <Button click={() => {}} value="6" />
      <Button click={() => {}} value="-" />
      <Button click={() => {}} value="7" />
      <Button click={() => {}} value="8" />
      <Button click={() => {}} value="9" />
      <Button click={() => {}} value="+" />
      <Button click={() => {}} value="." />
      <Button click={() => {}} value="0" />
      <Button click={() => {}} value="=" />
    </main>
  );
}

export default App;
