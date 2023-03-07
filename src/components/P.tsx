const P: React.FunctionComponent<{
  children: React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => (
  <p className={`select-none antialiased break-words break-all ${classes}`}>
    {children}
  </p>
);

export default P;
