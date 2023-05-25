import Image from "next/image";
import React from "react";
import DietsCard from "../common/DietsCard";

const Diets = ({ diets }) => {
  const fristForeDiets = diets.slice(0, 4);
  return (
    <div className="lg:w-8/12 lg:mx-auto">
      <div className="flex items-end justify-between">
        <h1 className="font-bold text-[38px] text-[#111112]">
          The most popular diets
        </h1>
        <div className="w-[35px] h-[16px]">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              src="/images/icon/right-arrow.svg"
              fill
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-[50px] grid grid-cols-4 gap-[15px] mb-[100px]">
        {fristForeDiets.map((diet) => (
          <DietsCard key={diet._id.$oid} diet={diet} />
        ))}
      </div>
    </div>
  );
};

export default Diets;
