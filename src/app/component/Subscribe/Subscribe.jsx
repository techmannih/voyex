export default function Subscribe() {
    return (
      <div className="opacity-100">
        <div className="text-center mb-4">
          <h1 className="text-xl  text-[rgba(70,186,60,1)]">Subscribe to Our Mailing List</h1>
          <p className="text-white p-2">Your email is safe with us.</p>
        </div>
        <div className="flex gap-4 max-w-lg mx-auto my-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-grow p-2 px-3 rounded-full bg-gray-900 text-gray-800"
          />
          <button className=" py-2 px-7 rounded-full font-bold bg-gradient-to-r from-[#84DE7C] to-[#2DE21D] text-black custom-border ">
            Subscribe
          </button>
        </div>
      </div>
    );
  }
  