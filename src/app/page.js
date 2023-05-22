"use client";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/home/Banner";
import Diets from "@/components/home/Diets";
import Reviews from "@/components/home/Reviews";
import { useEffect, useState } from "react";

export default function Home() {
    const [diets, setDiets] = useState([]);
    useEffect(() => {
        fetch("https://sandbox.psapi.co/random-pro")
            .then((res) => res.json())
            .then((data) => setDiets(data));
    }, []);
    return (
        <div>
            <Navbar />
            <Banner />
            <Reviews />
            <Diets diets={diets} />
        </div>
    );
}
