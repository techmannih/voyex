import researchData from "./data";
import Image from "next/image";

export default function Research() {
  return (
    <div className="flex justify-center mt-20  mx-[60px]  ">
      <div className="flex flex-col items-center w-full max-w-[1320px] text-white">
        {researchData.map((item) => (
          <div key={item.id} className="flex my-20">
            {item.id % 2 === 1 ? (
              <div className="flex gap-[57px] relative w-full items-center">
                <div className="flex gap-3 flex-col max-w-[603px]">
                  <p className="text-[rgba(70,186,60,1)] text-[18.44px] font-medium leading-[23.6px]">
                    {item.template}
                  </p>
                  <h1 className="text-[64px] font-medium leading-[81.92px] tracking-wider	 text-left">
                    {item.title}
                  </h1>
                  <p
                    className="font-fk-grotesk text-[16px] font-light leading-[20.48px] tracking-wider	 text-left opacity-88"
                    style={{ opacity: 0.88 }}
                  >
                    {" "}
                    {item.content}
                  </p>
                </div>

                <Image
                  src={item.image}
                  alt={item.title}
                  // Use fixed layout to control size
                  width={670} // Set the width
                  height={379} // Set the height
                  className="rounded-[24px]" // Apply border radius
                />
              </div>
            ) : (
              <div className="flex gap-[57px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  // layout="fixed" // Use fixed layout to control size
                  width={670} // Set the width
                  height={379} // Set the height
                  
                  className="rounded-[24px]" // Apply border radius
                />
                <div className="flex gap-[57px] relative  items-center">
                  <div className="gap-3 flex flex-col item w-full max-w-[586px]">
                    <p className="text-[rgba(70,186,60,1)]  text-[18.44px] font-medium leading-[23.6px] tracking-wider	">
                      {item.template}
                    </p>
                    <h1 className="text-[64px] font-medium leading-[81.92px] tracking-wider	 text-left">
                      {item.title}
                    </h1>

                    <p
                      className="font-fk-grotesk text-[16px] font-light leading-[20.48px] tracking-wider	 text-left opacity-88"
                      style={{ opacity: 0.88 }}
                    >
                      {" "}
                      {item.content}
                    </p>
                  </div>{" "}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
