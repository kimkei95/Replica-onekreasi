import Heading from "@/components/atoms/Headings";
import Text from "@/components/atoms/Text";
import Image from "next/image";

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 shadow-md rounded-lg">
      <Image src={imageSrc} alt={title} width={60} height={60} />
      <Heading className="text-xl mt-3 mb-3">{title}</Heading>
      <Text className="text-center">{description}</Text>
    </div>
  );
};

export default ServiceCard;
