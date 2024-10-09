// import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";
import VDO from "../../../../assets/Chat1.png";
export default function MainSection() {
  return (
    <div className="text-white text-center">
      <div className="bg-[rgba(114,249,103,1)] h-[50px] flex items-center justify-center"></div>
      <h1 className="text-[86px] font-medium leading-[110.08px] tracking-[0.02em] text-center w-[978px] mx-auto mt-24">
        Turn{" "}
        <span
          style={{ color: "#84DE7C" }}
          className="font-medium leading-[110.08px] tracking-[0.02em]"
        >
          Ideas into Workflows
        </span>{" "}
        in one click
      </h1>

      <div className="flex justify-center">
        <p className="mt-2 text-center opacity-88 font-light w-[978px] text-[20px] leading-[25.6px] tracking-[0.02em] text-[rgba(255, 255, 255, 1)]">
          Voyex is your Superapp that allows you to get the right AI tools and
          the correct workflow as per your use case. It simplifies finding,
          using, and querying AI tools and creates your own mini agency. All you
          need to do is describe your use case in a few words.
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-6">
        <button className="mt-8 w-[208.45px] h-[36.91px] bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] rounded-full flex justify-center items-center opacity-100 px-6 custom-border">
          <span className="text-black text-[14px] font-normal leading-[17.92px] ">
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
        <Image src={VDO} alt="Video" width={1100} height={624} />
      </div>
    </div>
  );
}
