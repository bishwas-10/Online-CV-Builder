import React from "react";
import { Check } from "lucide-react";
import { X } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 text-white">
      <div className="py-6 flex flex-col items-center content-center bg-black">
        <span className=" flex text-[12px] gap-4">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#" className="flex items-center gap-1">
            Your Ads Privacy Choices?
            <Check className="h-5 w-6 bg-blue-400 rounded-l-lg" />
            <X className="h-5 w-6 bg-red-400 rounded-r-lg" />
          </a>
        </span>
        <span className="text-[12px]">© 2020-2024, online-cv-builder.com, Inc. or its affiliates</span>
      </div>
    </footer>
  );
};

export default Footer;
