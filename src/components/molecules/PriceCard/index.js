import Button from "@/components/atoms/Buttons";

const PriceCard = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{price}</p>
      <ul className="my-4">
        {features.map((feature, index) => (
          <li key={index} className="text-white">
            ✓ {feature}
          </li>
        ))}
      </ul>
      <Button href={buttonLink}>{buttonText}</Button>
    </div>
  );
};

export default PriceCard;
