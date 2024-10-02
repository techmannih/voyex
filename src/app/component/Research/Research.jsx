import researchData from "./data";
import Image from "next/image";

export default function Research() {
  return (
    <div className="flex flex-col items-center m-16 text-white  ">
      {researchData.map((item) => (
        <div key={item.id} className="flex w-full my-20">
          {item.id % 2 === 1 ? (
            <div className="flex w-[1330px] h-[390px] gap-[57px]  relative">
              <div className="w-[603px] h-[390px] flex flex-col">
                <p className="text-[rgba(70,186,60,1)]">{item.template}</p>
                <h1 className="text-[64px] font-bold leading-[81.92px] tracking-[0.02em] mb-2 text-left">
                  {item.title}
                </h1>
                <p className="mt-4 font-fk-grotesk text-[16px] font-light leading-[20.48px] tracking-[0.02em] text-left">
                  {item.content}
                </p>
              </div>

              <Image
                src={item.image}
                alt={item.title}
                layout="fixed" // Use fixed layout to control size
                width={670} // Set the width
                height={379} // Set the height
                objectFit="cover"
                className="rounded-[24px]" // Apply border radius
              />
            </div>
          ) : (
            <div className="flex w-[1330px] h-[390px] gap-[57px] relative">
              <Image
                src={item.image}
                alt={item.title}
                layout="fixed" // Use fixed layout to control size
                width={670} // Set the width
                height={379} // Set the height
                objectFit="cover"
                className="rounded-[24px]" // Apply border radius
              />

              <div className="flex-1 w-[603px] h-[390px] gap-[16px] flex flex-col">
                <p className="text-[rgba(70,186,60,1)]">{item.template}</p>
                <h1 className="text-[64px] font-bold leading-[81.92px] tracking-[0.02em] mb-2 text-left">
                  {item.title}
                </h1>
                <p className="mt-4 font-fk-grotesk text-[16px] font-light leading-[20.48px] tracking-[0.02em] text-left text-[rgba(255, 255, 255, 1)]">
                  {item.content}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
