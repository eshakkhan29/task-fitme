import React from "react";
import Review from "./Review";
import Image from "next/image";

const Reviews = () => {
    return (
        <div className="lg:w-8/12 lg:mx-auto py-[129px] flex justify-between">
            <div className="w-1/2">
                <div className="flex flex-col">
                    <div>
                        <h1 className="font-bold text-[38px] text-[#111112]">
                            We cook – they enjoy every
                        </h1>
                        <div className="flex items-center gap-x-[18px]">
                            <h1 className="font-bold text-[38px] text-[#111112]">
                                minute of lives
                            </h1>
                            <div className="w-[123px] h-[43px]">
                                <div className="w-full h-full relative">
                                    <Image
                                        className="object-cover"
                                        src="/images/shape/arrow-right.svg"
                                        fill
                                        alt="text-shape"
                                    />
                                </div>
                            </div>
                            <h1 className="font-bold text-[38px] text-[#111112]">lives</h1>
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <p className="font-normal text-base text-[#ADAEAF]">Because we...</p>
                        <div className="flex items-center mt-[28px]">
                            <div className="w-[35px] h-[37px]">
                                <div className="w-full h-full relative">
                                    <Image
                                        className="object-cover"
                                        src="/images/icon/quote.svg"
                                        fill
                                        alt="text-shape"
                                    />
                                </div>
                            </div>
                            <p className="ml-[50px] w-[80%] text-left">
                                We don`t accept half-measures and shortcuts, because what we care
                                about is the WOW effect. And all the luck that our efforts are not
                                in vain. We know this because we closely follow the opinions of our
                                consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <div className="grid grid-cols-2 gap-10">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
