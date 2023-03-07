const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
}> = ({ click, value }) => (
  <button
    onClick={() => click(value)}
    className="rounded-sm text-3xl bg-slate-900 text-indigo-100 border-none outline-none shadow-md transition focus-visible:outline-solid focus-visible:outline-offset-0 focus-visible:outline-indigo-500 hover:bg-gray-900 active:bg-cyan-500"
  >
    {value}
  </button>
);

export default Button;