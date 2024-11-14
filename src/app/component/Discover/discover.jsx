export default function Discover() {
  return (
    <div className=" flex  mt-48  mx-[60px] justify-center text-center smooth-scroll">
      <div className="flex flex-col items-center text-white w-full max-w-[1156px]">
        <p className="text-[18.44px] font-medium leading-[23.6px] text-left text-[#84DE7C]">
          Get Discovered
        </p>
        <h1 className="text-[48px] font-medium leading-[61.44px] tracking-wider max-md:text-[24px]	max-md:leading-[30.44px] text-center w-full max-w-[860px]">
          Are You an AI Tool Developer or Product Owner?
        </h1>
        <p
          className="text-[16px] font-light leading-[24px] text-center mt-4 opacity-88 tracking-wider	 w-full max-w-[1156px]"
          style={{ opacity: 0.88 }}
        >
          Don’t miss out on the momentum with Voyex. List your product or tool
          today and be part of the AI revolution.{" "}
          <span className="text-[#84DE7C]">
            We’re offering free listing opportunities
          </span>{" "}
          for our first few partners.
        </p>
        <p
          className="text-[16px] font-light leading-[24px] text-center mt-2 opacity-88 tracking-wider	"
          style={{ opacity: 0.88 }}
        >
          Voyex acts as the Google for AI—don’t let your tool go unnoticed. By
          partnering with us, your tool becomes a key part of our workflow
          recommendations, ensuring it reaches users who need it most.
        </p>
        <div className="flex justify-center mt-8 gap-6  max-md:items-center max-md:flex-col max-md:gap-[24px]">
          <button className="mt-8 max-md:mt-0 w-[208.45px] h-[36.91px] bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] rounded-full flex justify-center items-center opacity-100 px-6 custom-border">
            <span className="text-black text-[14px] font-normal leading-[17.92px] ">
              Get Started
            </span>
            {/* <IoArrowForwardOutline className="text-[rgba(70,186,60,1)]" /> */}
          </button>

          <button className="mt-8  max-md:mt-0 w-[208.45px] h-[38.91px] text-md font-normal  border-[1.48px] border-solid border-[rgba(70,186,60,1)]  rounded-full opacity-100 flex justify-center px-6 items-center">
            <span className="text-[rgba(70,186,60,1)] ">Find out more</span>
            {/* <IoArrowForwardOutline  className="text-[rgba(70,186,60,1)]" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
