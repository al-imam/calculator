const Button: React.FunctionComponent<{
  click: (value: string) => void;
  value: string;
}> = ({ click, value }) => (
  <button onClick={() => click(value)}>{value}</button>
);

export default Button;
