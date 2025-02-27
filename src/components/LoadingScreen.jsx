import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "VICTORIA DURAND";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0D0D0D] bg-gradient-to-r from-[#8C2703] to-[#F28A2E] bg-clip-text text-transparent flex flex-col items-center justify-center font-bold">
      <div className="mb-4 text-8xl">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[10px] bg-[#0D0D0D] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#688C86] animate-loading-bar"></div>
      </div>
    </div>
  );
};
