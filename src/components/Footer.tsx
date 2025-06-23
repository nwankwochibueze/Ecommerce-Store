import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center  pt-20 pb-20 ">
      <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto p-4 ">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>
          </div>
          <div>
            <h3>@2025 Le Parle`</h3>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};
export default Footer;
