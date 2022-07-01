import { FC } from "react";

type StackItemProps = {
  tech: string;
};

const StackItem: FC<StackItemProps> = ({ tech }) => {
  return (
    <div className="flex flex-col m-2 items-center">
      <img
        className="h-16 w-16 bg-white rounded-lg"
        src={`icons/Stack/${tech}.svg`}
        alt={`${tech}`}
      />
      <div className="text-lg">{tech}</div>
    </div>
  );
};

export default StackItem;
