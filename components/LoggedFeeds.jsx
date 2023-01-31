import { useEffect, useState } from "react";

const colorChar = [
  `from-[#287233]`,
  `from-[#999950]`,
  `from-[#5E2129]`,
  `from-[#102C54]`,
  `from-[#E63244]`,
  `from-[#705335]`,
  `from-[#6C4675]`,
  `from-[#75151E]`,
  `from-[#CF3476]`,
];

const LoggedFeeds = () => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(colorChar[Math.floor(Math.random() * colorChar.length)]);
  }, []);
  return (
    <div
      className={`absolute top-16 left-0 right-0 sm:pb-20 sm:left-24 md:left-56  bg-[#1e2427] text-white min-h-screen`}
    >
      <div className={`h-[320px] w-full bg-gradient-to-b ${color} to-black`}>
        <p></p>
      </div>
    </div>
  );
};

export default LoggedFeeds;
