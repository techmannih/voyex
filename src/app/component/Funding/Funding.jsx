export default function Funding() {
  return (
    <div
      className="p-9 flex justify-center m-16 items-center bg-gray-950 rounded-2xl border border-gray-700"
      style={{
        background:
          "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
      }}
    >
      <div className="text-start mb-10 w-[627px] p-9">
        <p className="text-md font-semibold text-white">
          Sponsors and Partnerships
        </p>
        <h1 className="text-3xl text-[rgba(114,249,103,1)] mt-2">
          An Ecosystem of AI Partnerships Unlocking Boundless Innovation
        </h1>
        <p className="mt-4 text-gray-400">
          A growing number of DApps are collaborating with Layerdapp to create a
          multi-chain DeFi ecosystem.
        </p>
      </div>

      <div className="flex flex-wrap flex-col justify-center gap-3 mx-auto p-9 text-white">
        <div className="flex gap-3">
          <div
            className="partners rounded-2xl p-4 h-[163px] w-[263px]"
            style={{
              background: "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
            }}
          >
            <h2 className="font-semibold text-lg mb-2">Partners</h2>
            <ul className="list-disc list-inside">
              <li>Ethereum</li>
              <li>Binance</li>
              <li>Matic</li>
              <li>Polygon</li>
            </ul>
          </div>

          <div 
          className="partners rounded-2xl p-4 h-[163px] w-[263px]"
          style={{
            background: "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
            boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
          }}
          >
            <h2 className="font-semibold text-lg mb-2">Backed By</h2>
            <ul className="list-disc list-inside">
              <li>Uniswap</li>
              <li>Compound</li>
              <li>AAVE</li>
              <li>Lido</li>
            </ul>
          </div>
        </div>

        <div className="investors rounded-2xl shadow-md p-4 h-[163px] w-[543px]"
        
         style={{
           background: "linear-gradient(90.83deg, rgba(0, 167, 102, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
           boxShadow: "0px 1.86px 15.83px 0px rgba(22, 22, 22, 0.1)",
         }}
        >
          <h2 className="font-semibold text-lg mb-2">Investors</h2>
          <ul className="list-disc list-inside">
            <li>Uniswap</li>
            <li>Compound</li>
            <li>AAVE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}