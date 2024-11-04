import Image from "next/image";
import chatbot from "../../../../assets/Frame.png";
import Icon from "../../../../assets/Icon.png";

export default function Goal() {
  return (
    <div className="flex justify-between mt-20  mx-[60px]  text-white relative smooth-scroll" >
      <div className="w-full  items-center max-w-[800px] h-[495px]">
        <h1 className="text-[69.9px] font-medium leading-[74px] tracking-[-3.6px] text-[#2DE21D]">
          The Future of Automation: Agent-Based Workflows
        </h1>
        <p className="text-[19.8px] font-light leading-[28px] tracking-[-0.2px] text-left mt-16">
          This is just the beginning. We&apos;re developing agent-based
          workflows that will allow you to
        </p>
        <div className="w-[660px] mt-16">
          <ul className="list-none flex flex-wrap">
            <li className="w-1/2 text-[17.9px] font-normal leading-[26px] tracking-[-0.144px] text-left p-1 flex">
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
            <li className="w-1/2 text-[17.9px] font-normal leading-[26px] tracking-[-0.144px] text-left p-1 flex">
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
            <li className="w-1/2 text-[17.9px] font-normal leading-[26px] tracking-[-0.144px] text-left p-1 flex">
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
            <li className="w-1/2 text-[17.9px] font-normal leading-[26px] tracking-[-0.144px] text-left p-1 flex">
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

        <p className="text-[19.8px] font-light leading-[28px] tracking-[-0.2px] text-left mt-8">
          It&apos;s like having a personal agency that manages everything, from
          content creation and social media strategies to technical tasks.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={chatbot} width={440} height={240} alt="Chatbot" />
      </div>
    </div>
  );
}
