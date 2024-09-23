import { IoArrowForwardOutline } from "react-icons/io5";

export default function MainSection() {
  return (
    <div className="text-white text-center ">
      <div className="bg-[rgba(114,249,103,1)] h-[50px] flex items-center justify-center mx-10"></div>
      <h1 className="text-[170.92px] font-bold leading-[218.77px] tracking-[2%] text-center">
        Voyex.
      </h1>

      <div className="flex justify-center">
        <p className="mt-4 text-center opacity-88 font-normal text-[28.49px] leading-[38.46px] tracking-[2%] w-[1120px]">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="mt-8 w-[456.45px] h-[70.91px] text-2xl  border-[1.48px] border-solid border-[rgba(70,186,60,1)]  rounded-[51.7px] opacity-100 flex justify-between px-6 items-center">
          <span className="text-[rgba(70,186,60,1)]">
            Start Your Complete AI Journey
          </span>
          <IoArrowForwardOutline  className="text-[rgba(70,186,60,1)]" />
        </button>
      </div>
    </div>
  );
}
