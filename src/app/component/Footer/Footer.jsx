export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-gray-500 flex justify-between items-center m-16">
      
      <div>
        <p>© {currentYear} Voyex Inc. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
}
