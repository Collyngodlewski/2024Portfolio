interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return <div className={`container-component ${className}`}>{children}</div>;
}

export default Container;
