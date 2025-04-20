"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";

const Home = () => {
  const router = useRouter();

  const handleVerify = () => {
    if (clickedWords.length > 11) {
      router.push("/balance");
    } else {
      showAlert("Select your 12 back up phrase");
    }
  };

  const [clickedWords, setClickedWords] = useState<
    { id: number; word: string }[]
  >([]);

  const handleWordClick = (id: number) => {
    if (clickedWords.length > 11) {
      showAlert("Select your 12 back up phrase");
    }
    const newWord = words.find((word) => word.id == id);
    const exists = clickedWords.find((word) => word.id == newWord?.id);
    if (exists) {
      return;
    }
    if (newWord) {
      setClickedWords((prev) => [...prev, newWord]);
    }
  };

  const words = [
    { id: 1, word: "flame" },
    { id: 2, word: "drift" },
    { id: 3, word: "grip" },
    { id: 4, word: "stone" },
    { id: 5, word: "brisk" },
    { id: 6, word: "clap" },
    { id: 7, word: "frost" },
    { id: 8, word: "plant" },
    { id: 9, word: "trap" },
    { id: 10, word: "blink" },
    { id: 11, word: "vibe" },
    { id: 12, word: "wrist" },
  ];

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

      <div className="mt-[50px] w-full h-[249px] border border-[#0F2754] rounded-[24px]">
        <div className="w-full h-full grid grid-cols-4 px-[10px] gap-[10px] place-content-center">
          {clickedWords?.map((word, i) => (
            <button
              key={i}
              className="px-[16px] h-[36px] bg-[#192347] rounded-[24px] text-[14px] font-semibold"
            >
              {word.word}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-[30px] grid grid-cols-4 px-[10px] gap-[10px] place-content-center">
        {words.map((word, i) => {
          const exists = clickedWords.find(
            (clickedword) => clickedword.id == word.id
          );
          return (
            <button
              key={i}
              onClick={() => handleWordClick(word.id)}
              className={`${
                exists ? "blur-[1px]" : ""
              } px-[16px] h-[36px] bg-[#192347] rounded-[24px] text-[14px] font-semibold`}
            >
              {word.word}
            </button>
          );
        })}
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

const showAlert = (msg: string) => {
  (window as any).Telegram?.WebApp.showAlert(msg);
};
