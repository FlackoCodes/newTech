import { LuDot } from "react-icons/lu";

interface HeroProps {
    heading: string;
    paragraph?: string;
    buttonText?: string;
    graphicsImage?: string;
    backgroundImage?: string;
    profileImage?: string;
    name?: string;
    date?: number | string;
    time?: string;
} const Hero: React.FC<HeroProps> = ({
    backgroundImage,
    heading,
    paragraph,
    buttonText,
    graphicsImage,
    profileImage,
    date,
    time,
    name
}) => {
    return (
        <div>
            <section>
                <div
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "auto 1000px",
                    }}
                    className="w-[90%] my-0 mx-auto relative bg-cover bg-center bg-no-repeat rounded mt-4 mb-8"
                >
                    <div className="flex flex-col items-center px-4 py-8 md:px-12 md:py-16 lg:px-24 lg:py-24">
                        <h1 className="py-2 text-white font-bold md:text-2xl lg:text-3xl md:w-[600px] text-center">
                            {heading}
                        </h1>
                        <p className="text-white text-lg font-normal my-2 font-[poppins]">
                            {paragraph}
                        </p>
                        {
                            buttonText &&
                            <button
                                type="button"
                                className="bg-white rounded-full mb-8 font-normal py-2 px-6 md:text-lg"
                            >
                                {buttonText}
                            </button>
                        }

                    </div>
                    {profileImage && (
                        <div className="flex justify-center items-center gap-2 font-bold text-white">
                            <div className="flex gap-2 items-center">
                                <img className="rounded-full" src={profileImage} />
                                <span>{name}</span>
                                <LuDot className="text-white" />
                            </div>
                            <span>{date}</span>
                            <LuDot className="text-white" />
                            <span>{time}</span>
                        </div>)}
                    {graphicsImage && (
                        <div className="absolute hidden lg:block top-40 left-60 lg:w-[800px] lg:h-[200px] my-40">
                            <img src={graphicsImage} alt="media icons" className="rounded" />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Hero;