import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black text-white mx-16 my-10">
      <div className=" flex justify-between items-center">
        <div className="text-[24px] font-bold leading-[30.72px] tracking-[0.02em] text-left">
          Voyex.
        </div>

        <ul className="flex space-x-8 items-center pl-24">
          <li>
            <Link
              href="#pricing"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#resources"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="blog"
              className="font-normal text-[14px] leading-[17.92px] text-left"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="">
          <button
            className="py-2 px-4 rounded-full text-[14px] font-normal leading-[17.92px]"
            style={{
              color: "rgba(114, 249, 103, 1)", // Set text color here
            }}
          >
            Sign Up
          </button>

          <button 
  className="text-black py-2 px-8 text-[14px] font-medium leading-[17.92px] rounded-full bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] custom-border"
>
  Log in
</button>

        </div>
      </div>
    </div>
  );
}
