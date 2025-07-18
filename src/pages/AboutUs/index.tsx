import AboutUsCTA from "../../pages/AboutUs/CTA";
import Hero from "./AboutHero";
import Main from "../../pages/AboutUs/Main";
import Outro from "../../pages/AboutUs/Outro";
import Mission from "./Mission";

export default function AboutComp() {
  return (
    <>
      <Hero />
      <AboutUsCTA />
      <Main />
      <div className="my-8 md:my-20">
        <Mission />
      </div>

      <Outro />
    </>
  );
}
