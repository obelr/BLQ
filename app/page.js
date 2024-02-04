"use client";
import Discount from "@/Components/Discount";
import Navbar from "@/Components/navbar";
import Shortcuts from "@/Components/shortcuts";
import ImageSlider from "@/Components/slider";

export default function Home() {
  return (
    <>
    <section className="">
      <div className="mt-1">
        <Navbar />
      </div>
    
      <ImageSlider />
     
    

      <div className=" mb-10">
        <Shortcuts />
      </div>
      <div className="flex justify-center ">
        <Discount />
      </div>
      </section>
    </>
  );
}
