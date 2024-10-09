// Molecules/PromoSection.js
import Button from "@/components/atoms/Buttons";
import Heading from "@/components/atoms/Headings";
import ImageComponent from "@/components/atoms/ImageComponent";
import Text from "@/components/atoms/Text";
import React from "react";

const PromoSection = () => {
  const handleButtonClick = () => {
    window.open("https://wa.me/628123456789", "_blank");
  };

  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between bg-gray-400 p-5 rounded-md shadow-lg">
      <div className="lg:w-1/2">
        <Heading>
          <h1 className="text-xl pl-20 font-bold flex flex-col pb-3">
            Dapatkan Penawaran Terbaik Dari Harga Terbaik
          </h1>
        </Heading>
        <div className="text-center rounded-md">
          <Text type="paragraph">
            Jangan khawatir dengan budget pembuatan website anda. Segera
            konsultasikan bisnis anda dengan kami.agar kami bisa memberikan
            solusi yang terbaik bagi bisnis anda. Jasa Pembuatan Website
            Terpercaya dan Terjangkau Hanya di One Kreasi Web Studio.
          </Text>
          <Button label="Hubungi Kami" onClick={handleButtonClick}>
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <ImageComponent
          src="/header-website-copy.jpg"
          alt="Promotional Image"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default PromoSection;
