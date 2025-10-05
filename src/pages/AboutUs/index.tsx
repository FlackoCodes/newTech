import Main from "../../pages/AboutUs/Main";
import Outro from "../../pages/AboutUs/Outro";
import Mission from "./Mission";
import { Hero } from "../../components/Hero";

export default function AboutComp() {
  return (
    <>
      <div className="mb-20 md:mb-40">
        <Hero />
      </div>
      <Main />
      <div className="my-8 md:my-20">
        <Mission />
      </div>
      <Outro />
    </>
  );
}
