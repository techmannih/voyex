export default function Subscribe() {
  return (
    <div className="opacity-100 smooth-scroll">
      <div className="text-center mb-4">
        <h1 className="text-[24px] font-medium leading-[30px] text-[rgba(70,186,60,1)] tracking-wider">
          Subscribe to Our Mailing
        </h1>

        <p className="text-white text-base font-normal leading-6 p-2 tracking-wider">
          Your email is safe with us.
        </p>
      </div>
      <div className="flex gap-4 max-w-3xl mx-auto my-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow py-3 px-4 rounded-full outline-none bg-[#1E1E1E7A] text-gray-100 w-[604px]"
        />
        <button className="py-2 px-7 rounded-full font-bold bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black custom-border ">
          Subscribe
        </button>
      </div>
    </div>
  );
}
