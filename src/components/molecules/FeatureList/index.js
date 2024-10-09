import Text from "@/components/atoms/Text";

const FeatureList = ({ features }) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-2 text-black">
          <span className="text-green-500">✔️</span>
          <Text>{feature}</Text>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
