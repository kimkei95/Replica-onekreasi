import ServiceCard from "@/components/molecules/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/coding.png",
      title: "Website Development",
      description: "Pembuatan website oleh team profesional pada bidangnya.",
    },
    {
      imageSrc: "/web-design.png",
      title: "UI / UX Design",
      description:
        "Kami memperhatikan setiap detail yg dibuat di setiap web klien.",
    },
    {
      imageSrc: "/responsive.png",
      title: "Responsive Mobile",
      description: "Kami selalu menyesuaikan tampilan dari beragam perangkat.",
    },
    {
      imageSrc: "/speed.png",
      title: "Good Page Speed",
      description: "Kecepatan website menjadi kunci utama pelayanan kami.",
    },
  ];

  return (
    <section className="py-10 bg-blue-600 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Mengapa Kami?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
