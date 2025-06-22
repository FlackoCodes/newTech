import Hero from "./Hero";
import HomeFeatures from "./HomeFeatures";
import News from "./News";
import OurRefs from "./OurRefs";
import OurSocials from "./OurSocials";
import SubFoot from "./SubFoot";
import heroBg from "../../images/img/Hero-Image.jpg";
import graphics from "../../images/img/graphics-img.png";

export default function Home() {
    return (
        <>
            <Hero backgroundImage={heroBg}
                heading="All In One Social Media Management Solution For Businesses"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                buttonText="Create Free Account"
                graphicsImage={graphics} />
            <HomeFeatures />
            <OurSocials />
            <OurRefs />
            <News />
            <SubFoot />
        </>
    )
}
