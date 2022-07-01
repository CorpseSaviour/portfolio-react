import { FC } from "react";

type CardProps = {
  children: JSX.Element[] | JSX.Element | string | undefined;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="p-3 m-3 bg-Light rounded-lg drop-shadow-xl text-white">
      {children}
    </div>
  );
};

export default Card;
