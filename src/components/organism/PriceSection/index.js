import PriceCard from "@/components/molecules/PriceCard";

const PriceSection = () => {
  const packages = [
    {
      title: "Landing Page",
      price: "Rp. 1.200.000",
      features: ["1 Halaman", "Gratis Hosting 1GB", "Dapatkan Domain .com"],
      buttonText: "Hubungi Sekarang",
      buttonLink: "https://wa.me/your-link",
    },
    {
      title: "Website Company Profile BASIC",
      price: "Rp. 2.400.000",
      features: ["5 Halaman", "Gratis Hosting 2GB", "Dapatkan Domain .com"],
      buttonText: "Hubungi Sekarang",
      buttonLink: "https://wa.me/your-link",
    },
    {
      title: "Website Company Profile PRO",
      price: "Rp. 4.100.000",
      features: [
        "Unlimited Pages",
        "Gratis Hosting 3GB",
        "Dapatkan Domain .com",
      ],
      buttonText: "Hubungi Sekarang",
      buttonLink: "https://wa.me/your-link",
    },
    {
      title: "E-commerce",
      price: "Custom",
      features: [
        "Full Custom E-Commerce",
        "Maintenance Berkala",
        "Keamanan Data Terjamin",
      ],
      buttonText: "Hubungi Sekarang",
      buttonLink: "https://wa.me/your-link",
    },
    {
      title: "Custom Website",
      price: "Custom",
      features: [
        "Full Custom Website",
        "Maintenance Berkala",
        "Keamanan Data Terjamin",
      ],
      buttonText: "Hubungi Sekarang",
      buttonLink: "https://wa.me/your-link",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {packages.map((pkg, index) => (
        <PriceCard
          key={index}
          title={pkg.title}
          price={pkg.price}
          features={pkg.features}
          buttonText={pkg.buttonText}
          buttonLink={pkg.buttonLink}
        />
      ))}
    </div>
  );
};

export default PriceSection;
