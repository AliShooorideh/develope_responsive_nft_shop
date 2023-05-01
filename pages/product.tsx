import { motion, useDragControls } from "framer-motion";
import Image from "next/image";
import pic1 from "./../public/images/001.jpg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import BidBox from "@/components/BidBox";
export default function Home() {
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  return (
    <div className="fixed inset-0 bg-[#2F2C3B] px-9 py-8">
      <div className="mb-4 flex justify-between">
        <div className="flex space-x-2 rounded-xl bg-white bg-opacity-20 py-1 px-2 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-bold text-white">33.33</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fff"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <span className="text-4xl font-bold text-white">Hot Bid</span>
      <div className="relative mt-12 flex flex-col items-center justify-center">
        <Image
          className="z-20 mt-2 w-9/12 rounded-3xl object-contain"
          loading="lazy"
          src={pic1}
          alt={""}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div
          className=" absolute top-0 h-[265px] w-[265px] animate-[xlCube_20s_linear_infinite] rounded-3xl bg-gradient-to-l from-sky-300 to-blue-100 p-[3px] opacity-70 
          duration-75"
        >
          <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
        </div>
        <div
          className="absolute top-0 h-[265px] w-[265px] animate-[smCube_20s_linear_infinite] rounded-3xl bg-gradient-to-l from-sky-300 to-blue-100 p-[3px] opacity-70 
          duration-75"
        >
          <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
        </div>
        <div className="z-50 -mt-8 flex w-full items-center justify-between rounded-2xl bg-[#555172] bg-opacity-70 p-4 backdrop-blur-sm">
          <div className="flex flex-col space-y-2 font-bold text-white">
            <span className="text-xl">Cube Power</span>
            <span className="text-sm">Highest Bid: 124ETH</span>
          </div>
          <button className="h-10 rounded-2xl bg-white bg-opacity-70 px-3 text-black backdrop-blur-md">
            Place a Bid
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-white">
        <span className="text-xl font-bold">Popular Bids</span>
        <span className="text-sm">View all</span>
      </div>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={15}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <BidBox id={1} title={"Yellow Bid"} srcIcon={"/images/002.jpg"} price={1} new />
        </SwiperSlide>
        <SwiperSlide>
          <BidBox id={2} title={"Purple Bid"} srcIcon={"/images/003.jpg"} price={0.3} />
        </SwiperSlide>
        <SwiperSlide>
          <BidBox id={3} title={"Red Bid"} srcIcon={"/images/004.jpg"} price={2} />
        </SwiperSlide>
        <SwiperSlide>
          <BidBox id={4} title={"Green Bid"} srcIcon={"/images/005.jpg"} price={0.1} new/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
