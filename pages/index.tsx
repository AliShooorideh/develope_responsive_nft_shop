import { motion, useDragControls } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const controls = useDragControls();
  const constraintsRef = useRef(null);
  const [x, setX] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(true);
  const [dragSnapToOrigin, setDragSnapToOrigin] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(0);
  const [onDrag, setOnDrag] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(true);
  const route = useRouter();
  useEffect(() => {
    if (x < 320) {
      setDragSnapToOrigin(true);
      setNextPage(true);
    } else {
      setDragSnapToOrigin(false);
      setNextPage(false);
      setTimeout(() => {
        route.push("/product");
      }, 1500);
    }
  }, [x]);
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-around bg-[#2F2C3B]">
      <div
        style={{ rotate: `${speed + 50}deg` }}
        className={`absolute -right-10 -top-14 h-52 w-52 rounded-3xl bg-gradient-to-l from-sky-300 to-blue-100 p-[3px] opacity-70 duration-75 ${
          !onDrag && "animate-[xlCube_7s_linear_infinite]"
        }`}
      >
        <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
      </div>
      <div
        style={{ rotate: `${speed + 20}deg` }}
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-3xl bg-gradient-to-l from-pink-300 to-pink-100 p-[3px] opacity-70 duration-75 ${
          !onDrag && "animate-[mdCube_7s_linear_infinite]"
        }`}
      >
        <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
      </div>

      <div
        style={{ rotate: `${speed}deg` }}
        className={`absolute -right-2 -top-5 mb-4 h-24 w-24 rounded-3xl border-2 border-white duration-75 ${
          !onDrag && "animate-[smCube_7s_linear_infinite]"
        }`}
      />
      <div
        style={{ rotate: `${speed + 20}deg` }}
        className={`absolute -right-10 h-40 w-40 rounded-3xl bg-gradient-to-l from-sky-300 to-blue-100 p-[3px] opacity-70 duration-75 ${
          !onDrag && "animate-[mdCube_7s_linear_infinite]"
        }`}
      >
        <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
      </div>

      <div
        style={{ rotate: `${speed}deg` }}
        className={`absolute -right-2 mb-4 h-24 w-24 rounded-3xl border-2 border-white duration-75 ${
          !onDrag && "animate-[smCube_7s_linear_infinite]"
        }`}
      />
      <div
        style={{ rotate: `${speed + 50}deg` }}
        className={`absolute -left-10 bottom-0 h-52 w-52 rounded-3xl bg-gradient-to-l from-sky-300 to-blue-100 p-[3px] opacity-70 duration-75 ${
          !onDrag && "animate-[xlCube_7s_linear_infinite]"
        }`}
      >
        <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
      </div>
      <div
        style={{ rotate: `${speed + 20}deg` }}
        className={`absolute -left-10 bottom-0 h-40 w-40 rounded-3xl bg-gradient-to-l from-pink-300 to-pink-100 p-[3px] opacity-70 duration-75 ${
          !onDrag && "animate-[mdCube_7s_linear_infinite]"
        }`}
      >
        <div className="h-full w-full rounded-3xl  bg-[#2F2C3B]" />
      </div>

      <div
        style={{ rotate: `${speed}deg` }}
        className={`absolute -left-2 bottom-0 mb-4 h-24 w-24 rounded-3xl border-2 border-white duration-75 ${
          !onDrag && "animate-[smCube_7s_linear_infinite]"
        }`}
      />

      <div className="flex w-full flex-col">
        <motion.span
          animate={
            nextPage
              ? { opacity: 1, zIndex: 3 }
              : { opacity: 0, translateY: -20 }
          }
          className="ml-10 text-5xl font-medium leading-tight text-white"
        >
          Enjoy <br /> the most
          <br /> beautiful
          <br /> NFT
        </motion.span>
      </div>
      <div
        className="flex h-14 w-4/5 items-center rounded-full bg-white bg-opacity-10 px-2 backdrop-blur-xl"
        ref={constraintsRef}
      >
        <motion.span
          className="absolute right-2 -translate-x-1/2 text-white"
          animate={
            showText
              ? { opacity: 0.6, zIndex: 3 }
              : { opacity: 0, bottom: 0, display: "none" }
          }
        >
          Swipe to get started
        </motion.span>
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          drag="x"
          dragSnapToOrigin={dragSnapToOrigin}
          dragControls={controls}
          dragConstraints={{ left: 0, right: 255 }}
          dragElastic={0}
          onDrag={(event, info) => {
            setX(info.point.x);
            setShowText(false);
            setSpeed(Math.round(info.point.x));
            setOnDrag(true);
          }}
          onDragEnd={() => {
            setShowText(true), setSpeed(0);
            setOnDrag(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
