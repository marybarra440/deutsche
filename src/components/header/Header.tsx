"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] bg-white relative flex items-center justify-between p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/toIujwC.png" width={158} height={17} className="w-[158px] h-[17px]" alt="logo" />
      <Image src="https://i.imgur.com/IQG02Ya.jpeg" width={35} height={35} className="w-[35px] h-[35px]" alt="logo" />
    </div>
  );
}
