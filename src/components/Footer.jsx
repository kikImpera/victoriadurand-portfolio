import { useEffect } from "react";

export const Footer = () => {
  return (
    <section className="w-full z-40 bg-[#080808] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="flex justify-center space-between items-center h-12">
        <p className="font-semibold text-gray-100/20">
          © 2025 - Victoria Durand - All Rights Reserved
        </p>
      </div>
    </section>
  );
};
