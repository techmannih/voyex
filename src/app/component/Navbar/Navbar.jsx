import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Voyex.</div>
        <ul className="flex space-x-8 items-center pl-24">
          <li>
            <Link href="#pricing" className="">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#resources" className="">
              Resources
            </Link>
          </li>
          <li>
            <Link href="#about" className="">
              About us
            </Link>
          </li>
          <li>
            <Link href="blog" className="">
              Blog
            </Link>
          </li>
        </ul>
        <div className="">
          <button
            className=" py-2 px-4 rounded-full text-sm"
            style={{
              color: "rgba(114, 249, 103, 1)", // Set text color here
            }}
          >
            Sign Up
          </button>
          <button
            className="text-black  py-2 px-8 text-sm rounded-full "
            style={{
              background: "linear-gradient(90deg, #84DE7C 0%, #2DE21D 98%)",
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
