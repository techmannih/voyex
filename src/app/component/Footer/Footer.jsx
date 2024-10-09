export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative text-gray-500  mt-20 pb-5">
      <hr
        className="absolute -top-7 w-full h-[1px] border-none align-items-center mx-auto"
        style={{
          background:
            "linear-gradient(90deg, rgba(132, 222, 124, 0) 0%, #2DE21D 49.84%, rgba(45, 226, 29, 0) 93.5%)",
        }}
      />

      <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-10">
        <p>© {currentYear} Voyex Inc. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
}
