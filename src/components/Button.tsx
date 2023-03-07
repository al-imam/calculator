const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
}> = ({ click, value }) => (
  <button
    onClick={() => click(value)}
    className="rounded-sm text-3xl bg-slate-900 text-indigo-100 border-none outline-none shadow-md transition focus-within:outline-solid focus-within:outline-offset-0 focus-within:outline-indigo-500"
  >
    {value}
  </button>
);

export default Button;
