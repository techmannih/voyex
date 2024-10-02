export default function Subscribe() {
  return (
    <div className="opacity-100">
      <div className="text-center mb-4">
        <h1 className="text-[24px] font-medium leading-[30px] text-[rgba(70,186,60,1)]">
          Subscribe to Our Mailing
        </h1>

        <p className="text-white p-2">Your email is safe with us.</p>
      </div>
      <div className="flex gap-4 max-w-3xl mx-auto my-8">
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-grow p-2 px-3 rounded-full bg-gray-900 text-gray-800 w-[604px]"
        />
        <button className=" py-2 px-7 rounded-full font-bold bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black custom-border ">
          Subscribe
        </button>
      </div>
      <hr
        className="w-[1216px] h-[1px] border-none align-items-center mx-auto"
        style={{
          background:
            "linear-gradient(90deg, rgba(132, 222, 124, 0) 0%, #2DE21D 49.84%, rgba(45, 226, 29, 0) 93.5%)",
        }}
      />
    </div>
  );
}
