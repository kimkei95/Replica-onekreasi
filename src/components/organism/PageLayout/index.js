import ButtonGroup from "@/components/molecules/ButtonGroups";
import CardGroup from "@/components/molecules/CardGroup";
import { useState } from "react";

const PageLayout = () => {
  const [activeTab, setActiveTab] = useState("landing");

  return (
    <div className="container bg-gray-500 mx-auto p-4">
      <h1 className="text-3xl text-black font-bold text-center mb-6">
        Lihat beberapa hasil project dari One Kreasi Web Studio
      </h1>
      <ButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardGroup activeTab={activeTab} />
    </div>
  );
};

export default PageLayout;
