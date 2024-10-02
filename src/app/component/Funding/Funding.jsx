export default function Funding() {
  return (
    <div
      className="p-9 flex justify-center m-16 items-center rounded-[33px] border border-gray-700"
      style={{
        background:
          "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
      }}
    >
      <div className="text-start mb-10 w-[627px]">
        <p className="text-[16.76px] font-normal leading-[21.46px] tracking-[0.93px] text-left text-white uppercase">
          Sponsors and Partnerships
        </p>

        <h1 className="text-[37.25px] font-medium leading-[47.68px] text-left text-[rgba(114,249,103,1)] mt-2">
          An Ecosystem of AI Partnerships Unlocking Boundless Innovation
        </h1>

        <p className="mt-4 text-gray-400 text-[18.63px] font-light leading-[23.84px] text-left">
          A growing number of DApps are collaborating with Layerdapp to create a
          multi-chain DeFi ecosystem.
        </p>
      </div>

      <div className="flex flex-wrap flex-col justify-center gap-3 mx-auto p-9 text-white">
        <div className="flex gap-3">
          <div
            className="partners rounded-[17px] p-4 h-[163px] w-[263px]"
            style={{
              background:
                "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
            }}
          >
            <h2 className="font-normal text-[14.9px] leading-[19.07px] tracking-[0.93125px] mb-2 uppercase text-left">
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
  );
}
