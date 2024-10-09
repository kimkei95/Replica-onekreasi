import Button from "@/components/atoms/Buttons2";

const ButtonGroup = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mb-8">
      <Button
        label="Landing Page"
        onClick={() => setActiveTab("landing")}
        isActive={activeTab === "landing"}
      />
      <Button
        label="Company Profile"
        onClick={() => setActiveTab("companyProfile")}
        isActive={activeTab === "companyProfile"}
      />
      <Button
        label="E-Commerce"
        onClick={() => setActiveTab("ecommerce")}
        isActive={activeTab === "ecommerce"}
      />
    </div>
  );
};

export default ButtonGroup;
