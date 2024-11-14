import Image from "next/image";
import chatbot from "../../../../assets/Frame.png";
import Icon from "../../../../assets/Icon.png";

export default function Goal() {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-20 mx-[20px] md:mx-[60px] text-white relative smooth-scroll">
      <div className="w-full md:w-[50%] items-center max-w-[800px] h-auto">
        <h1
          className="text-[#2DE21D] text-[48px] font-medium leading-[61px] tracking-[-3.6px] max-sm:text-[40px] max-sm:leading-[50px] max-md:text-[60px] max-md:leading-[70px] mt-4 md:text-[69.9px] md:leading-[74px]"
        >
          The Future of Automation: Agent-Based Workflows
        </h1>
        <p className="text-[16px] md:text-[19.8px] font-light leading-[22px] md:leading-[28px] tracking-[-0.2px] text-left mt-8">
          This is just the beginning. We&apos;re developing agent-based
          workflows that will allow you to
        </p>
        <div className="w-full mt-8">
          <ul className="list-none flex flex-wrap max-md:flex-col">
            <li className="w-1/2 md:w-full text-[16px] md:text-[17.9px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.144px] text-left p-2 flex">
              <span>
                <Image
                  src={Icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="mr-2.5"
                />
              </span>
              Ask deeper questions
            </li>
            <li className="w-1/2 md:w-full text-[16px] md:text-[17.9px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.144px] text-left p-2 flex">
              <span>
                <Image
                  src={Icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="mr-2.5"
                />
              </span>
              Automate campaigns
            </li>
            <li className="w-1/2 md:w-full text-[16px] md:text-[17.9px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.144px] text-left p-2 flex">
              <span>
                <Image
                  src={Icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="mr-2.5"
                />
              </span>
              Track performance metrics
            </li>
            <li className="w-1/2 md:w-full text-[16px] md:text-[17.9px] font-normal leading-[22px] md:leading-[26px] tracking-[-0.144px] text-left p-2 flex">
              <span>
                <Image
                  src={Icon}
                  width={20}
                  height={20}
                  alt="Icon"
                  className="mr-2.5"
                />
              </span>
              Run workflows using multiple AI tools
            </li>
          </ul>
        </div>
        <p className="text-[16px] md:text-[19.8px] font-light leading-[22px] md:leading-[28px] tracking-[-0.2px] text-left mt-8">
          It&apos;s like having a personal agency that manages everything, from
          content creation and social media strategies to technical tasks.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <Image
          src={chatbot}
          width={440}
          height={240}
          alt="Chatbot"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
