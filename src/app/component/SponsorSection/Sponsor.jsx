import sponsorData from "./data";

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-wrap justify-center">
        {sponsorData.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex items-center m-4 bg-[rgba(23,25,32,1)]  h-[47.71px] px-6 py-2 gap-[6.45px] rounded-[21.28px] opacity-100"
          >
            <img
              src={sponsor.icon}
              //   alt={sponsor.name}
              className=" mr-2"
            />
            <span className="text-white">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
