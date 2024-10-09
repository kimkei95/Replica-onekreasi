import Button from "@/components/atoms/Buttons";
import Heading from "@/components/atoms/Headings";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/working.png)" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Hero */}
      <div className="relative z-10 text-center text-white">
        <p className="text-sm mb-2">Saatnya Kembangkan Bisnismu</p>
        <Heading>Mau Punya Web System di One Kreasi Aja</Heading>
        <Button>Jelajahi Sekarang</Button>
      </div>
    </section>
  );
};

export default HeroSection;
