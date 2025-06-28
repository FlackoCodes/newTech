import Hero from "./HomePage/Hero"
import careerProfile from "../images/img/careerProfile.png"

export default function BlogSingle() {
    return (
        <div>
            <Hero heading="Making Social Media Marketing
                Even More Efficient"
                profileImage={careerProfile}
                name="caroline Parker"
                date={new Date().getFullYear()}
                time="3 min read"
                 />
        </div>
    )
}
