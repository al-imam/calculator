const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
}> = ({ click, value }) => (
  <button
    onClick={() => click(value)}
    className="rounded-sm text-3xl bg-slate-900 text-indigo-50 border-none outline-none"
  >
    {value}
  </button>
);

export default Button;
