// import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";
import VDO from "../../../../assets/Chat1.png";
export default function MainSection() {
  return (
    <div className="text-white text-center">
      <div className="bg-[rgba(114,249,103,1)] h-[50px] flex items-center justify-center"></div>
      <h1 className="text-[64px] font-bold leading-[81.92px] tracking-[0.02em] text-center w-[833px] mx-auto mt-24">
        Voyex Lorem Ipsum Yorem ipsum dolor sit a
      </h1>
      <div className="flex justify-center">
        <p className="mt-2 text-center opacity-88 font-light text-[28.49px] leading-[36.46px] tracking-[0.02em] w-[1155px] text-[rgba(255, 255, 255, 1)]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem.
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-6">
        <button className="mt-8 w-[208.45px] h-[36.91px] bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] rounded-full flex justify-center items-center opacity-100 px-6 custom-border">
          <span className="text-black text-[14px] font-normal leading-[17.92px] "  >
            Start Your AI Journey
          </span>
          {/* <IoArrowForwardOutline className="text-[rgba(70,186,60,1)]" /> */}
        </button>

        <button className="mt-8 w-[208.45px] h-[38.91px] text-md font-normal  border-[1.48px] border-solid border-[rgba(70,186,60,1)]  rounded-full opacity-100 flex justify-center px-6 items-center">
          <span className="text-[rgba(70,186,60,1)] ">Upload Product</span>
          {/* <IoArrowForwardOutline  className="text-[rgba(70,186,60,1)]" /> */}
        </button>
      </div>
      <div className="relative mb-2 items-center flex justify-center my-24">
        <Image
          src={VDO}
          alt="Video"
          width={1100}
          height={624}
        />
      </div>
    </div>
  );
}
