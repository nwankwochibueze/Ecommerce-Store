import React from "react";
import LeParle from "../assets/LeParle.webp";

const ShopHeroSection: React.FC = () => {
  return (
    <section>
      <img src={LeParle} className="w-full" alt="Le Parle Hero" />
    </section>
  );
};

export default ShopHeroSection;
