import Card from "@/components/atoms/Cards";

const CardGroup = ({ activeTab }) => {
  const cards = {
    landing: [
      {
        imageSrc: "/images/1.jpg",
        altText: "JBL Festival",
        title: "JBL Festival",
        websiteLink: "https://jblfestival.com",
      },
      {
        imageSrc: "/images/2.jpg",
        altText: "DisneyOnIce",
        title: "Disney On Ice",
        websiteLink: "https://onestepforward.id/disneyonice/",
      },
      {
        imageSrc: "/images/3.jpg",
        altText: "AyaKlinik",
        title: "Aya Klinik",
        websiteLink: "http://www.ayaklinik.id/",
      },
      {
        imageSrc: "/images/4.jpg",
        altText: "Hidup",
        title: "Cerita Hidup Indonesia",
        websiteLink: "http://www.ceritahidupindonesia.com/",
      },
    ],
    companyProfile: [
      {
        imageSrc: "/images/5.jpg",
        altText: "Tomaple",
        title: "Tomaple Donut",
        websiteLink: "https://tomapledonuts.com/",
      },
      {
        imageSrc: "/images/6.jpg",
        altText: "LifeTimeDesign",
        title: "Life Time Design",
        websiteLink: "https://lifetimedesign.co/",
      },
      {
        imageSrc: "/images/7.jpg",
        altText: "Hades",
        title: "Hades VIP",
        websiteLink: "https://hadesvip.id/",
      },
      {
        imageSrc: "/images/8.jpg",
        altText: "Sims Security",
        title: "S.I.M.S Security",
        websiteLink: "https://simssecurity.co.id/",
      },
    ],
    ecommerce: [
      {
        imageSrc: "/images/9.jpg",
        altText: "Kcmtku",
        title: "Kacamataku (Kcmtku)",
        websiteLink: "https://kcmtku.id/",
      },
      {
        imageSrc: "/images/10.jpg",
        altText: "BrandCncptStr",
        title: "Brand Concept Store",
        websiteLink: "https://id.brandconceptstore.com/",
      },
      {
        imageSrc: "/images/11.jpg",
        altText: "OptikJoy",
        title: "Optik Joy",
        websiteLink: "https://optikjoy.com/",
      },
      {
        imageSrc: "/images/12.jpg",
        altText: "Kanemochi",
        title: "Kanemochi",
        websiteLink: "https://kanemochijapanomiyage.com/",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards[activeTab]?.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          title={card.title}
          websiteLink={card.websiteLink}
        />
      ))}
    </div>
  );
};

export default CardGroup;
