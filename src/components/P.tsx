const P: React.FunctionComponent<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <p style={style} className="clear-both float-left break-words break-all">
    {children}
  </p>
);

export default P;
