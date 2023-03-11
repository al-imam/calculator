const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
  span?: string;
}> = ({ click, value, span = "" }) => (
  <button
    onClick={() => click(value)}
    className={
      "font-manrope antialiased rounded select-none text-3xl bg-white text-blue-900 dark:bg-slate-900 dark:text-indigo-100 hover:bg-slate-100 dark:hover:bg-gray-900 active:bg-teal-200 dark:active:bg-blue-500 border-none outline-none shadow-md transition focus-visible:outline-solid focus-visible:outline-offset-0 focus-visible:outline-indigo-500 " +
      span
    }
  >
    {value}
  </button>
);

export default Button;
