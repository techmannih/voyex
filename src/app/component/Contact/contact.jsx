import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="flex justify-center items-center gap-4 mt-20">
      <FaXTwitter className=" text-3xl text-white" />
      <FaDiscord className=" text-3xl text-white" />
      <FaGithubSquare className="text-3xl text-white" />
    </div>
  );
}