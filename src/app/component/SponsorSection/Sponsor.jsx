'use client'; // Ensure this is at the top if you're using Next.js

import React from "react";
import Image from "next/image"; // Import the Image component
import sponsorData from "./data";
// import './Sponsor.css'; // Import CSS file for styles

export default function Sponsor() {
  const duplicatedSponsors = [...sponsorData, ...sponsorData]; // Duplicate the sponsor data

  return (
    <div className="overflow-hidden mt-16 relative">
      <p className="text-white flex justify-center">
        Trusted by Industry leaders
      </p>
      <div className="flex sponsor-carousel animate-scroll whitespace-nowrap">
        {duplicatedSponsors.map((sponsor, i) => (
          <div
            key={i}
            className="flex items-center m-4 bg-[rgba(23,25,32,1)] h-[47.71px] px-6 py-2 gap-[6.45px] rounded-full opacity-100"
          >
            <Image 
              src={sponsor.icon} 
              alt={sponsor.name} // Provide a descriptive alt text
              width={50} // Set a width (adjust as necessary)
              height={50} // Set a height (adjust as necessary)
              className="mr-2"
            />
            <span className="text-white whitespace-nowrap">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
