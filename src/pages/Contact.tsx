import Hero from "./HomePage/Hero";
import heroImg from "../images/img/Hero-Image.jpg";
import Global from "../components/Global";
import FAQ from "../components/FAQ";
import Forms from "../components/Forms";

export default function Contact() {
  return (
    <>
      <Hero
        backgroundImage={heroImg}
        heading="Get In Touch"
        paragraph="prettyFlacko@gmail.com"
        paragraphTwo="0241040022"
        formsComponent={Forms}
      />
      <Global />
      <FAQ />
    </>
  );
}

//
