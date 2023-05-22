import React from 'react';
import Star from '../common/Star';

const Review = () => {
    return (
        <div>
                        <div className="flex items-center gap-x-[5px]">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <div className="bg-[#F5F5F5] rounded-[20px] p-4 mt-[10px]">
                            <div className="flex items-center gap-x-[10px]">
                                <h2 className="font-semibold text-[14px]">Guy Hawkins</h2>
                                <span className="w-[24px] h-[1px] bg-[#111112]"></span>
                            </div>
                            <p className="font-normal text-[14px] text-[#ADAEAF] leading-[19px] mt-[10px]">
                                Minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi{" "}
                            </p>
                        </div>
                    </div>
    );
};

export default Review;