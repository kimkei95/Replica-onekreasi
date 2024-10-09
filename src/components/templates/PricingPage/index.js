import Heading from "@/components/atoms/Headings";
import PriceSection from "@/components/organism/PriceSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16 px-6">
      <Heading>
        <h1 className="text-black text-center items-center p-4">
          Dapatkan Harga Spesial Dari Yang Terbaik
        </h1>
        <h3 className="text-orange-500 text-center p-3">Hanya di One Kreasi</h3>
      </Heading>

      <PriceSection />
    </div>
  );
};

export default PricingPage;
