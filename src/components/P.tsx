const P: React.FunctionComponent<{
  children: React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => (
  <p className={`clear-both float-left break-words break-all ${classes}`}>
    {children}
  </p>
);

export default P;
