export default function Funding() {
  return (
    <div className="flex mt-48 justify-center smooth-scroll px-4 sm:px-6 md:px-8 lg:px-12">
      <div
        className="flex flex-col lg:flex-row justify-between items-center gap-5 rounded-[33px] border border-gray-700 w-full max-w-[1320px] p-8 sm:p-10 lg:p-12"
        style={{
          background:
            "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
        }}
      >
        <div className="text-start">
          <p className="text-[16.76px] font-normal leading-[21.46px] tracking-[0.93px] text-left text-white uppercase">
            Sponsors and Partnerships
          </p>

          <h1
            className="text-4xl font-medium text-left  mt-2 max-sm:text-[24px] leading-[30.70px]"
            style={{
              background:
                "linear-gradient(90deg, #84DE7C 0%, #72F967 50%, #51CC47 100%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
              WebkitBackgroundClip: "text", // Needed for Chrome/Safari
              color: "transparent", // Makes the text color transparent so the background is visible
            }}
          >
            An Ecosystem of AI Partnerships
            <br /> Unlocking Boundless Innovation
          </h1>

          <p className="mt-4 text-[#768190] text-lg font-normal text-left">
            A growing number of DApps are collaborating with Layerdapp to
            <br /> create a multi-chain DeFi ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap flex-col justify-center gap-3 text-white">
          <div className="flex flex-col sm:flex-row gap-3">
            <div
              className="partners rounded-[17px] p-4 h-[163px] w-[263px] max-sm:max-w-[311px]"
              style={{
                background:
                  "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
                boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
              }}
            >
              <h2 className="font-normal text-sm tracking-[0.93125px] mb-2 uppercase text-left">
                Partners
              </h2>

              <ul className="list-disc list-inside font-light">
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  Ethereum
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  Binance
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  Matic
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left">
                  Polygon
                </li>
              </ul>
            </div>

            {/* Backed By Card */}
            <div
              className="partners rounded-[17px] p-4 sm:w-[263px] w-full h-[163px]"
              style={{
                background:
                  "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
                boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
              }}
            >
              <h2 className="font-normal text-[14.9px] leading-[19.07px] tracking-[0.93125px] mb-2 uppercase text-left">
                Backed By
              </h2>
              <ul className="list-disc list-inside font-light">
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  Uniswap
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  Compound
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                  AAVE
                </li>
                <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left">
                  Lido
                </li>
              </ul>
            </div>
          </div>

          {/* Investors Card */}
          <div
            className="investors rounded-[17px] shadow-md p-4 sm:w-[543px] w-full h-[163px]"
            style={{
              background:
                "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
            }}
          >
            <h2 className="font-normal text-[14.9px] leading-[19.07px] tracking-[0.93125px] mb-2 uppercase text-left">
              Investors
            </h2>
            <ul className="list-disc list-inside font-light">
              <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                Uniswap
              </li>
              <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                Compound
              </li>
              <li className="text-[14.9px] font-light leading-[19.07px] tracking-[0.93125px] text-left">
                AAVE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
