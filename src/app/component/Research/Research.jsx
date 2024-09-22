import researchData from "./data";
import Image from "next/image";
import chatbot from "../../../../assets/ChatBot.png"; // Ensure the import path is correct

export default function Research() {
  return (
    <div className="flex flex-col items-center m-16 text-white  ">
      {researchData.map((item) => (
        <div key={item.id} className="flex w-full my-20">
          {item.id % 2 === 1 ? (
            <>
              <div className="flex-1 p-4">
                <p className="text-[rgba(70,186,60,1)]">{item.template}</p>
                <h1 className="font-fk-grotesk text-[64px] font-bold mb-2 text-left ">
                  {item.title}
                </h1>

                <p>{item.content}</p>
              </div>
              <div className="flex-1 relative w-full h-[400px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full" // Ensure it fills the container
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 relative w-full h-[400px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full" // Ensure it fills the container
                />
              </div>
              <div className="flex-1 p-4">
                <p className="text-[rgba(70,186,60,1)]">{item.template}</p>
                <h1 className="font-fk-grotesk text-[64px] font-bold mb-2 text-left ">
                  {item.title}
                </h1>
                <p>{item.content}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
