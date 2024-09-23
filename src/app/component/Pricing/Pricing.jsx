export default function App() {
  return (
    <div className="">
      <div className="">
        <div className="Individual bg-gradient-to-r from-green-100 to-gray-100 shadow-[0px_4px_100px_rgba(0,75,255,0.05)] p-6 rounded-lg">
          <h1 className="text-blue-600">Individual</h1>
          <p className="text-gray-400">
            Create an account for your Organization and start Lorem Ipsum Lorem
            Ipsum.
          </p>
          <p className="font-bold mt-2">
            $1000.00 <span className="text-gray-400">/month</span>
          </p>
          <p className="text-gray-400"> $1000 paid annually</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Create an account
          </button>
          <ul className="mt-4 space-y-2 list-none">
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li>
            <li>Benefit 5</li>
            <li>Benefit 6</li>
            <li>Benefit 7</li>
            <li>Benefit 8</li>
          </ul>
          <button className="mt-4 py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
            See All features
          </button>
        </div>

        <div className="Organization bg-gradient-to-r from-[#557Cfd] to-[#84DE7C] shadow-[0px_4px_100px_rgba(0,75,255,0.05)] p-6 rounded-lg text-white">
          <h1 className="text-[#557Cfd]">Organization</h1>
          <p className="text-gray-200">
            Create an account for your Organization and start Lorem Ipsum Lorem
            Ipsum.
          </p>
          <h1 className="text-[#557Cfd] mt-4">Let’s talk</h1>
          <p className="text-gray-200">Price is based on Number of seats</p>
          <button className="bg-[#84DE7C] text-black py-2 px-4 rounded-md hover:bg-[#72C66D]">
            Schedule a Demo
          </button>
          <ul className="mt-4 space-y-2 list-none">
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
            <li>Benefit 4</li>
            <li>Benefit 5</li>
            <li>Benefit 6</li>
            <li>Benefit 7</li>
            <li>Benefit 8</li>
          </ul>
          <button className="mt-4 py-2 px-4 border border-[#557Cfd] text-[#557Cfd] rounded-md hover:bg-[#84DE7C]">
            See All features
          </button>
        </div>
      </div>
    </div>
  );
}
