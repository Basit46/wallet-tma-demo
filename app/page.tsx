"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

const Home = () => {
  const router = useRouter();

  const handleVerify = () => {
    router.push("/balance");
  };

  return (
    <div className="h-full px-[15px] pt-[20px] pb-[40px] flex flex-col">
      <div>
        <button className="size-[36px] rounded-full bg-[#192347] grid place-items-center">
          <HiArrowLongLeft className="text-[#6B7280]" />
        </button>
        <h1 className="mt-[20px] text-center font-medium font-poppins tracking-[-2%] leading-[120%]">
          Confirm Seed
        </h1>
        <p className="mt-[10px] text-[12px] font-poppins text-center">
          Please select 12 back up seed according to their numbers
        </p>
      </div>

      <div className="mt-[50px] w-full h-[249px] border border-[#0F2754] rounded-[24px]"></div>

      <div className="mt-[30px] grid grid-cols-4 px-[10px] gap-[10px] place-content-center">
        {Array.from({ length: 12 }).map((_, i) => (
          <button
            key={i}
            className="px-[16px] h-[36px] bg-[#192347] rounded-[24px] text-[14px] font-semibold"
          >
            Great
          </button>
        ))}
      </div>

      <button
        onClick={handleVerify}
        className="mt-auto w-full h-[55px] bg-[#4C93FE] rounded-[8px] text-[#F9FAFB] font-semibold"
      >
        Verify
      </button>
    </div>
  );
};

export default Home;
