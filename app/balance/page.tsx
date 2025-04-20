import Image from "next/image";
import React from "react";
import {
  GoArrowDownLeft as Arrow1,
  GoArrowUpRight as Arrow2,
} from "react-icons/go";

const Balance = () => {
  return (
    <div className="h-full px-[15px] pt-[20px] pb-[40px] flex flex-col">
      <div className="flex justify-between items-center">
        <button>
          <Image src="/menu.svg" width={24} height={24} alt="menu" />
        </button>

        <div className="flex justify-between items-center gap-[12px]">
          <button>
            <Image src="/search.svg" width={24} height={24} alt="menu" />
          </button>
          <button>
            <Image src="/noti.svg" width={24} height={24} alt="menu" />
          </button>
        </div>
      </div>

      <h1 className="mt-[20px] text-center font-medium font-DMSans">
        Portfolio balance
      </h1>
      <p className="text-[48px] text-center font-medium font-DMSans">
        $9,091.00
      </p>

      <div className="mt-[30px] flex gap-[12px] justify-center">
        <button className="w-[148px] h-[52px] bg-[#54545657] rounded-full font-medium text-[#F9FAFB] flex justify-center items-center gap-[4px]">
          <Arrow1 className="text-[24px]" />
          Buy
        </button>
        <button className="w-[148px] h-[52px] bg-[#54545657] rounded-full font-medium text-[#F9FAFB] flex justify-center items-center gap-[4px]">
          <Arrow2 className="text-[24px]" />
          Transfer
        </button>
      </div>

      <div className="relative mt-[30px] w-full h-[85.86px] rounded-[24px] overflow-hidden">
        <Image src="/bg.png" fill className="object-cover" alt="bg" />
        <div className="absolute left-0 top-0 w-full h-full px-[20px] pt-px] flex items-center gap-[10px]">
          <Image src="/diamond.png" width={32} height={32} alt="diamond" />

          <div className="flex-1">
            <h1 className="text-[20px] font-semibold">Reward</h1>
            <p className="text-[12px]">
              Claim your reward for completing <br /> your first 100 Transaction
            </p>
          </div>

          <button className="w-[71px] h-[36px] rounded-[24px] bg-white text-[#020820] text-[14px] font-semibold">
            Claim
          </button>
        </div>
      </div>

      <div className="mt-[30px] flex flex-col space-y-[20px]">
        <button className="w-[97px] h-[36px] bg-[#4C93FE] rounded-full text-[14px] font-medium text-[#F9FAFB]">
          All assets
        </button>

        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-center gap-[10px]">
            <div className="relative w-[44px] h-[44px] rounded-full">
              <Image src="/chia.png" fill alt="coin" />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="font-medium font-DMSans">Chia</h1>
              <span className="text-[12px] font-medium text-[#98A2B3]">
                260 xch
              </span>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-semibold font-DMSans">
                $3120.<span className="text-[10px]">00</span>
              </p>
              <span className="text-[12px] font-medium text-[#970F0F] text-end">
                9.78%
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[10px]">
            <div className="relative w-[44px] h-[44px] rounded-full">
              <Image src="/eth.png" fill alt="coin" />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="font-medium font-DMSans">
                ETH<span className="opacity-60">xch</span>
              </h1>
              <span className="text-[12px] font-medium text-[#98A2B3]">
                2.00
              </span>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-semibold font-DMSans">
                $4471.<span className="text-[10px]">00</span>
              </p>
              <span className="text-[12px] font-medium text-[#454141] text-end">
                0.00
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[10px]">
            <div className="relative w-[44px] h-[44px] rounded-full">
              <Image src="/usdt.png" fill alt="coin" />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="font-medium font-DMSans">
                USDT<span className="opacity-60">xch</span>
              </h1>
              <span className="text-[12px] font-medium text-[#FFD87A]">
                incoming
              </span>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-semibold font-DMSans">
                $1500.<span className="text-[10px]">00</span>
              </p>
              <span className="text-[12px] font-medium text-[#454141] text-end">
                0.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
