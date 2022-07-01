import { FC } from "react";

type PageContent = {
  children?: JSX.Element[] | JSX.Element | string | undefined;
};

const Page: FC<PageContent> = ({ children }) => {
  return (
    <div className="flex flex-col m-2 p-4 w-full h-full text-Platinum ">
      {children}
    </div>
  );
};

export default Page;
