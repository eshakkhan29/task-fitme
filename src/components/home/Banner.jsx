import Image from "next/image";
import React from "react";
import BlackButton from "../common/BlackButton";

const Banner = () => {
  return (
    <div className="mt-[100px] bg-[url('/images/banner-bg.png')] bg-center bg-no-repeat py-[120px]">
      <div className="text-center">
        <div className="relative inline-block">
          <h1 className="font-extrabold text-[70px] text-[#111112] leading-[74px]">
            Premium quality
          </h1>
          <div className="absolute top-0 -left-3">
            <div className="w-[127px] h-[75px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/images/icon/before-line.svg"
                  fill
                  alt="text-shape"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[22px] mt-[25px]">
          <h1 className="font-extrabold text-[70px] text-[#111112] leading-[74px]">
            catering diets
          </h1>
          <div className="w-[127px] h-[75px]">
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                src="/images/shape/apple.svg"
                fill
                alt="text-shape"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-[72px] text-[#111112] leading-[74px]">
            for
          </h1>
        </div>
        <div className="relative inline-block">
          <div className="flex items-center justify-center gap-x-[22px] mt-[25px]">
            <div className="w-[155px] h-[82px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/images/shape/avocado.svg"
                  fill
                  alt="text-shape"
                />
              </div>
            </div>
            <h1 className="font-extrabold text-[70px] text-[#111112] leading-[74px]">
              exacting
            </h1>
          </div>
          <div className="absolute -bottom-2 -right-3">
            <div className="w-[127px] h-[75px]">
              <div className="w-full h-full relative">
                <Image
                  className="object-cover"
                  src="/images/icon/after-line.svg"
                  fill
                  alt="text-shape"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-base text-[#828282] mt-[72px]">
          Culpa qui officia deserunt mollitia animi. Et harum quidem rerum
          facilis est et <br /> expedita distinctio. Nam libero tempore, cum
          soluta nobis est
        </p>
        <div className="mt-[25px] flex items-center justify-center gap-x-[27px]">
          <BlackButton>Adjust diet</BlackButton>
          <div className="w-[63px] h-[66px]">
            <div className="w-full h-full relative">
              <Image
                className="object-cover"
                src="/images/icon/play-icon.svg"
                fill
                alt="text-shape"
              />
            </div>
          </div>
          <h2 className="font-semibold text-[14px] text-[#111112] -ms-7">
            Watch wideo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
