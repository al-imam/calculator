const P: React.FunctionComponent<{
  children: React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => (
  <p className={`antialiased break-words break-all ${classes}`}>{children}</p>
);

export default P;
