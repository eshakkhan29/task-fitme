import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlackButton from "./BlackButton";

const Navbar = () => {
    return (
        <div className="lg:w-8/12 lg:mx-auto">
            <div className="py-[50px] flex items-center justify-between">
            <div className="w-[105px] h-[34px]">
                <div className="w-full h-full relative">
                    <Image
                        className="object-cover"
                        src="/images/logo/logo.png"
                        fill
                        alt="site-logo"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-[65px]">
                <Link href="/">Diets</Link>
                <Link href="/calorie">Calorie calculator</Link>
                <Link href="/calorie">Menu</Link>
                <Link href="/calorie">Delivery</Link>
                <Link href="/calorie">About us</Link>
                <Link href="/calorie">Blog</Link>
                <Link href="/calorie">FAQ</Link>
            </div>
            <div className="flex items-center gap-x-[28px]">
                <div className="w-[30px] h-[30px]">
                    <div className="w-full h-full relative">
                        <Image className="object-cover" src="/images/icon/Bag.svg" fill alt="" />
                    </div>
                </div>
                <BlackButton>Sign In</BlackButton>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
