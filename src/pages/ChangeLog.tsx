import Hero from "./HomePage/Hero";
import heroBg from "../images/img/Hero-Image.jpg";

export default function ChangeLog() {
  return (
    <>
      <Hero
        backgroundImage={heroBg}
        heading="Changelog"
        paragraph="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry."
      />
    </>
  );
}
