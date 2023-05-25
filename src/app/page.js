"use client";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/home/Banner";
import Diets from "@/components/home/Diets";
import Reviews from "@/components/home/Reviews";
import { getDiet } from "@/redux/features/diets/DiestSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const diets = useSelector((state) => state.diest?.diet)
    console.log(diets)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDiet());
    }, [])
    return (
        <div>
            <Navbar />
            <Banner />
            <Reviews />
            <Diets diets={diets} />
        </div>
    );
}
