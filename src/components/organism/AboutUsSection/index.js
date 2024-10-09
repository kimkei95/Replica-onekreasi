import Button from "@/components/atoms/Buttons";
import FeatureList from "@/components/molecules/FeatureList";
import InfoCard from "@/components/molecules/InfoCard";

const AboutUsSection = () => {
  const features = [
    "Garansi uang kembali jika web tidak sesuai dengan anda.",
    "Proses pengerjaan cepat dilakukan oleh tenaga profesional.",
    "Kami siap membantu anda 24 jam jika terjadi kendala.",
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center">
        <InfoCard
          icon="/followers.png"
          title="1000+"
          description="Klien percaya dengan jasa kami."
        />
        <div className="mt-8">
          <FeatureList className="text-black" features={features} />
        </div>
        <div className="mt-8">
          <Button href="https://wa.me/your-link">Hubungi Kami</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
