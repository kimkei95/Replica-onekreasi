import AboutUsSection from "@/components/organism/AboutUsSection";
import CardGroup from "@/components/organism/CardGroup";
import Contents from "@/components/organism/Content";
import FAQSection from "@/components/organism/FaqSection";
import Footer from "@/components/organism/Footer";

import PromoPageLayout from "@/components/organism/PromoPageLayout";
import ServicesSection from "@/components/organism/ServiceSection";
import SolusiSection from "@/components/organism/SolusiSection";
import MainTemplate from "@/components/templates/mainTemplate";
import PricingPage from "@/components/templates/PricingPage";
import HomepageTemplate from "@/components/templates/Show";
const cards = [
  {
    title: "Landing Page",
    description:
      "Landing page adalah halaman web tunggal yang dirancang khusus untuk mengarahkan pengunjung ke tindakan tertentu atau konversi, seperti pendaftaran, pembelian, atau pengunduhan.",
  },
  {
    title: "Company Profile",
    description:
      "Web Company Profile adalah wajah online dari perusahaan, yang memberikan gambaran menyeluruh tentang sejarah, visi, misi, nilai-nilai inti, produk atau layanan, serta pencapaian.",
  },
  {
    title: "E-Commerce",
    description:
      "Web e-commerce adalah platform online yang memungkinkan perusahaan untuk menjual produk atau layanan secara langsung kepada konsumen melalui internet. Web ini menawarkan produk produk.",
  },
  {
    title: "Web Custom",
    description:
      "Web custom adalah platform digital yang dibangun secara khusus untuk menuhi kebutuhan unik dan spesifik suatu perusahaan atau individu. Web custom dirancang dari awal dengan pertimbangan dan syarat yang khusus.",
  },
];

export default function Home() {
  return (
    <>
      <MainTemplate />
      <ServicesSection />
      <Contents />
      <AboutUsSection />
      <SolusiSection />
      <div className="container bg-white mx-auto p-4">
        <h1 className="text-3xl text-center text-black font-bold mb-4">
          Website Yang Anda Butuhkan
        </h1>
        <CardGroup className="text-black" cards={cards} />
      </div>
      <div>
        <PricingPage />
      </div>
      <div>
        <HomepageTemplate />
      </div>
      <div>
        <PromoPageLayout />
      </div>
      <div>
        <div className="container mx-auto p-6">
          <FAQSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
