import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const data = [
    {
      id: 1,
      title: "Yellow Bid",
      srcPic: "/images/002.jpg",
      price: 1,
    },
    {
      id: 2,
      title: "Purple Bid",
      srcPic: "/images/003.jpg",
      price: 0.3,
    },
    {
      id: 3,
      title: "Red Bid",
      srcPic: "/images/004.jpg",
      price: 2,
    },
    {
      id: 4,
      title: "Green Bid",
      srcPic: "/images/005.jpg",
      price: 0.1,
    },
  ];
  setTimeout(() => {
    setStartAnimation(true);
  }, 300);
  const pageData = data.find((item) => {
    return item.id === parseInt(id as string);
  });
  return (
    <div>
      <Image
        className="fixed inset-0 -z-10 w-screen scale-[1.7] rounded-xl object-fill blur-md"
        loading="lazy"
        src={`${pageData?.srcPic}`}
        alt={""}
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="mb-5 flex items-center justify-between px-9 pt-8 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
          onClick={() => router.back()}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span className="text-2xl font-bold">{pageData?.title}</span>
        <div className="grid grid-cols-2 gap-[7px] ">
          <div className="h-[6px] w-[6px] rounded-full bg-white" />
          <div className="h-[6px] w-[6px] rounded-full bg-white" />
          <div className="h-[6px] w-[6px] rounded-full bg-white" />
          <div className="h-[6px] w-[6px] rounded-full bg-white" />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center px-9 pb-8">
        <Image
          className="z-20 mt-2 w-full rounded-3xl object-contain"
          loading="lazy"
          src={`${pageData?.srcPic}`}
          alt={""}
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <div className=" space-y-5 rounded-t-[70px] bg-white px-9 py-8">
        <div className="flex items-center justify-between">
          <motion.span
            animate={
              startAnimation
                ? { opacity: 1, zIndex: 3 }
                : { opacity: 0, translateX: -20 }
            }
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-[#2F2C3B] "
          >
            {pageData?.title}
          </motion.span>
          <span className="rounded-lg bg-[#bcbac2] p-1 px-2 font-bold text-white">
            {pageData?.price} ETH
          </span>
        </div>
        <motion.p
          transition={{ duration: 0.7 }}
          animate={
            startAnimation
              ? { opacity: 1, zIndex: 3 }
              : { opacity: 0, translateY: -20 }
          }
          initial={{ opacity: 0 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
          risus tincidunt, porta magna in, facilisis eros. Nullam porttitor sit
          amet ante quis facilisis. Morbi ac ipsum hendrerit, laoreet urna sed,
          tristique ligula. Nulla facilisi. Etiam efficitur nulla vel metus
          facilisis, in iaculis nisi sollicitudin.
        </motion.p>
        <div className="flex justify-center">
          <motion.button
            transition={{ duration: 0.7 }}
            animate={
              startAnimation
                ? { opacity: 1, zIndex: 3, width: "100%" }
                : { opacity: 0, width: 0 }
            }
            initial={{ width: 0 }}
            className=" rounded-xl bg-[#2F2C3B] py-2 font-bold text-white active:scale-105"
          >
            Place a Bid
          </motion.button>
        </div>
      </div>
    </div>
  );
}
