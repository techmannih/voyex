// import BlogPost from "./component/BlogPost/Blog";
import Faq from "./component/FAQ/Faq";
import Footer from "./component/Footer/Footer";
import Funding from "./component/Funding/Funding";
import MainSection from "./component/MainSection/MainSection";
import Navbar from "./component/Navbar/Navbar";
import Research from "./component/Research/Research";
import Sponsor from "./component/SponsorSection/Sponsor";
import Subscribe from "./component/Subscribe/Subscribe";
import Template from "./component/Template/Template";
import Contact from "./component/Contact/contact";
import Goal from "./component/Goal/goal";
import Discover from "./component/Discover/discover";
import StarsCanvas from "./component/hooks/StarBackground"; // Adjust path as needed

// import Pricing from "./component/Pricing/Pricing";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Starry Background */}
      <StarsCanvas />

      {/* Your App Content */}
      <div className="relative">
        <Navbar />
        <MainSection />
        {/* <Pricing /> */}

        <Research />
        <Goal />
        <Template />
        <Funding />
        <Sponsor />
        {/* <BlogPost /> */}
        <Discover />
        <Faq />
        <Subscribe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
