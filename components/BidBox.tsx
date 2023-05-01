import Image from "next/image";
import Link from "next/link";

interface IProduct {
  title: string;
  price: number;
  srcIcon: string;
  new?: boolean;
  id: number;
}
export default function BidBox(item: IProduct) {
  return (
    <Link href={`/${item.id}`}>
      <div>
        {item.new && (
          <div className="absolute top-0 -right-2 rounded-md bg-white bg-opacity-30 px-2 text-sm text-white backdrop-blur-md">
            <span>New</span>
          </div>
        )}
        <Image
          className="mt-2 w-full rounded-xl object-contain"
          loading="lazy"
          src={item.srcIcon}
          alt={""}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="mt-2 flex items-center justify-between font-normal text-white opacity-60">
          <span>{item.title}</span>
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
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <span className="font-bold text-white">{item.price} ETH</span>
      </div>
    </Link>
  );
}
