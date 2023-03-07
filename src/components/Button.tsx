const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
  span?: string;
}> = ({ click, value, span = "" }) => (
  <button
    onClick={() => click(value)}
    className={
      "font-manrope antialiased rounded select-none text-3xl bg-slate-900 text-indigo-100 border-none outline-none shadow-md transition focus-visible:outline-solid focus-visible:outline-offset-0 focus-visible:outline-indigo-500 hover:bg-gray-900 active:bg-cyan-500 " +
      span
    }
  >
    {value}
  </button>
);

export default Button;
