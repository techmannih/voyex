import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black text-white  py-10 mx-[60px] ">
      <div className=" flex justify-between items-center">
        <Link
          href="/"
          className="text-[24px] font-bold leading-[30.72px] tracking-wider	 text-left"
        >
          Voyex.
        </Link>

        <ul className="flex space-x-8 items-center pl-24">
          <li>
            <Link
              href="/pricing"
              className="font-normal text-[14px] leading-[19.92px] text-left"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="">
          <button className="text-black py-2 px-8 text-[14px] font-medium leading-[17.92px] rounded-full bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] custom-border">
            Go to App
          </button>
        </div>
      </div>
    </div>
  );
}
