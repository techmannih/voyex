import MainSection from "./component/MainSection/MainSection";
import Navbar from "./component/Navbar/Navbar";
import Research from "./component/Research/Research";
import Sponsor from "./component/SponsorSection/Sponsor";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainSection />
      <Sponsor />
      <Research />
    </div>
  );
}
