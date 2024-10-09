import Text from "@/components/atoms/Text";
import Image from "next/image";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-yellow-500 text-white rounded-lg p-4 flex items-center space-x-4">
      <div className="icon">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default InfoCard;
