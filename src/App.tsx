import Button from "./components/Button";
import P from "./components/P";

function App() {
  return (
    <main className="mt-12 grid justify-center gap-2 grid-template">
      <section className="col-span-full bg-blue-400 flex flex-col justify-center items-end px-4 py-2 rounded">
        <P classes="text-lg text-gray-100">10000 + {/* demo text */}</P>
        <P classes="text-3xl text-white">10000 {/* demo text */}</P>
      </section>
      <Button click={() => {}} value="C" span="col-span-2" />
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
      <Button click={() => {}} value="=" span="col-span-2" />
    </main>
  );
}

export default App;
