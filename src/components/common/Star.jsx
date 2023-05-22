import Image from "next/image";
import React from "react";

const Star = () => {
    return (
        <div className="w-[22px] h-[22px]">
            <div className="w-full h-full relative">
                <Image className="object-cover" src="/images/icon/star.svg" fill alt="text-shape" />
            </div>
        </div>
    );
};

export default Star;
