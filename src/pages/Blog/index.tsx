import Hero from "../HomePage/Hero"
import heroBg from "../../images/img/Hero-Image.jpg";
import Articles from "../HomePage/Articles";
import SubFoot from "../HomePage/SubFoot";
export default function Blog() {
    return (
        <div>
            <Hero heading="Latest News & Articles"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                backgroundImage={heroBg}
            />
            <div className="w-[78%] my-0 mx-auto">
                <Articles />
                <Articles />
            </div>
            <SubFoot />
        </div>

    )
}
