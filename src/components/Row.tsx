import { FC } from "react";

type RowProps = {
  children?: JSX.Element[] | JSX.Element | string | undefined;
  className?: string | undefined;
};

const Row: FC<RowProps> = ({ children, className }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default Row;
