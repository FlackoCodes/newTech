import Hero from "./HomePage/Hero";
import bgImage from "../images/img/Hero-Image.jpg";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Pricing() {
  return (
    <>
      <Hero
        backgroundImage={bgImage}
        heading="This is Our Pricing Table"
        paragraph="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry"
      />
    </>
  );
}
