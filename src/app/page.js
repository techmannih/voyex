import BlogPost from "./component/BlogPost/Blog";
import Faq from "./component/FAQ/Faq";
import MainSection from "./component/MainSection/MainSection";
import Navbar from "./component/Navbar/Navbar";
import Research from "./component/Research/Research";
import Sponsor from "./component/SponsorSection/Sponsor";
import Template from "./component/Template/Template";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainSection />
      <Sponsor />
      <Research />
      <Template />
      <BlogPost />
      <Faq />
    </div>
  );
}
