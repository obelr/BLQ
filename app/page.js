"use client";
import Discount from "@/Components/Discount";
import Navbar from "@/Components/navbar";
import Shortcuts from "@/Components/shortcuts";
import ImageSlider from "@/Components/slider";

export default function Home() {
  return (
    <>
      <div className="flex mt-4 justify-center mb-10">
        <Navbar />
      </div>

      <ImageSlider />

      <div className=" mb-10">
        <Shortcuts />
      </div>
      <div className="flex justify-center ">
        <Discount />
      </div>
    </>
  );
}
