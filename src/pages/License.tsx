import Hero from "./HomePage/Hero"
import heroBg from "../images/img/Hero-Image.jpg";

export default function License() {
    return (
        <div>
            <Hero heading="License"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                backgroundImage={heroBg} />

            <div className="w-[70%] my-0 mx-auto">
                <div className="my-6 md:my-8">
                    <div className="flex flex-col lg:flex-row gap-2 justify-between my-2 md:my-8">
                        <h3 className="text-[#2f2f2f] font-bold text-lg md:text-3xl tracking-tight">Icon & Graphics</h3>
                        <div className="flex flex-col gap-4 text-[#808080] font-normal md:font-bold w-auto md:w-[500px] lg:w-[700px]">
                            <p>Icons and Graphics are manually designed by the <span className="text-purple-600">VictorFlow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>

                            <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>

                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 justify-between my-2 md:my-8">
                        <h3 className="text-[#2f2f2f] font-bold text-lg md:text-3xl tracking-tight">Photography</h3>
                        <div className="flex flex-col gap-8 text-[#808080] font-normal md:font-bold w-auto md:w-[500px] lg:w-[700px]">
                            <p>All images used in the  <span className="text-purple-600">Technologycal</span> Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <span className="text-purple-600">Unsplash, Pexels‍.</span> </p>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-[#2f2f2f] tracking-tight font-bold md:text-2xl">Pixcel : Licenses</h5>
                                <p className="text-purple-500">Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25, </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-[#2f2f2f] tracking-tight font-bold md:text-2xl">Unsplash : Licenses</h5>
                                <p className="text-purple-500">Image 1,  Image 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row justify-between my-2 md:my-8">
                        <h3 className="text-[#2f2f2f] font-bold text-lg md:text-3xl tracking-tight">Font</h3>
                        <div className="flex flex-col gap-4 text-[#808080] font-normal md:font-bold w-auto md:w-[500px] lg:w-[700px]">
                            <p> <span className="text-purple-600">Technologycal</span> template uses free licensed <span className="text-purple-600">Google Fonts</span> . Please check <span className="text-purple-600"> Mulish</span>.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
