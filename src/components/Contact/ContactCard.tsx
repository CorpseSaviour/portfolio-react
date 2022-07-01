import { FC } from "react";

type ContactCardProps = {
  alt: string;
  icon: string;
};

const ContactCard: FC<ContactCardProps> = ({ alt, icon }) => {
  return (
    <div className="w-20 m-2 flex flex-col items-center">
      <img className="h-20" src={`/icons/${icon}`} alt={alt} />
    </div>
  );
};

export default ContactCard;
