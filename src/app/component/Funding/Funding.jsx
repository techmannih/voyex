export default function Funding() {
  return (
    <div className="flex mt-48 justify-center">
      <div
        className="flex justify-between items-center gap-5 rounded-[33px] border border-gray-700 w-full max-w-[1320px] p-12"
        style={{
          background:
            "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
        }}
      >
        <div className="text-start">
          <p className="text-[16.76px] font-normal leading-[21.46px] tracking-[0.93px] text-left text-white uppercase">
            Sponsors and Partnerships
          </p>

          <h1 className="text-4xl font-medium text-left text-[rgba(114,249,103,1)] mt-2">
            An Ecosystem of AI Partnerships
            <br /> Unlocking Boundless Innovation
          </h1>

          <p className="mt-4 text-[#768190] text-lg font-normal text-left">
            A growing number of DApps are collaborating with Layerdapp to
            <br /> create a multi-chain DeFi ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap flex-col justify-center gap-3 text-white">
          <div className="flex gap-3">
            <div
              className="partners rounded-[17px] p-4 h-[163px] w-[263px]"
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

            <div
              className="partners rounded-[17px] p-4 h-[163px] w-[263px]"
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

          <div
            className="investors rounded-[17px] shadow-md p-4 h-[163px] w-[543px]"
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
              <li className="text-[14.9px] font-extra-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                Uniswap
              </li>
              <li className="text-[14.9px] font-extra-light leading-[19.07px] tracking-[0.93125px] text-left mb-[9.31px] last:mb-0">
                Compound
              </li>
              <li className="text-[14.9px] font-extra-light leading-[19.07px] tracking-[0.93125px] text-left">
                AAVE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
