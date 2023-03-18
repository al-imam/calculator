const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
  span?: string;
}> = ({ click, value, span = "" }) => (
  <button
    onClick={() => click(value)}
    className={`text-3xl antialiased text-blue-900 transition bg-white border-none rounded shadow-md outline-none select-none font-manrope dark:bg-slate-900 dark:text-indigo-100 hover:bg-slate-100 dark:hover:bg-gray-900 active:bg-teal-200 dark:active:bg-blue-500 focus-visible:ring-2 ring-indigo-500 ${span}`}
  >
    {value}
  </button>
);

export default Button;
