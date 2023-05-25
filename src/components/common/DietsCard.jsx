import Image from "next/image";
import React from "react";

const DietsCard = ({ diet }) => {
  const { title, description, listing_price, gallery, property_address } = diet;
  const { full_address, street_number, street_name, city, state, zip_code } =
    property_address;
  const price = listing_price.toLocaleString("en-US", {
    currency: "BDT",
  });

  console.log(gallery);
  return (
    <div>
      <div>
        <div className="h-[238px]">
          <div className="relative w-full h-full">
            <Image
              className="object-cover rounded-[15px]"
              src={gallery[1]}
              fill
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-4 font-bold text-base">{title}</h1>
        <div className="ml-[10px] flex items-center gap-x-[10px]">
          <p className="font-normal text-[14px] text-[#111112]">{city}</p>
          <p>{state}</p>
          <p>{zip_code}</p>
        </div>
        <p className="mt-[18px] font-normal text-[14px] leading-[19px] text-[#ADAEAF]">
          {description}
        </p>
        <div className="flex items-center justify-between mt-[25px]">
          <h1
            className={`font-bold text-[28px] text-[#111112] flex items-center gap-x-[5px]`}
          >
            <sub className={`font-normal text-[14px] text-[#ADAEAF]`}>from</sub>{" "}
            25{" "}
            <sub className="font-semibold text-[14px] text-[#111112]">pln</sub>
            <sub className="font-normal text-[14px] text-[#ADAEAF]"> /day</sub>
          </h1>
          <button className="py-[10px] px-[24px] font-semibold text-[14px] text-[#FDFBFA] bg-[#1AC84B] rounded-[10px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietsCard;
