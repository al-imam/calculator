const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
}> = ({ click, value }) => (
  <button
    onClick={() => click(value)}
    className="rounded-sm text-3xl bg-slate-900 text-indigo-300 border-none outline-none shadow-md transition"
  >
    {value}
  </button>
);

export default Button;
