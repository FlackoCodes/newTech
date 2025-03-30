import { FcCheckmark } from "react-icons/fc"
import featImage from "../../images/img/featImage.png"

export default function HomeFeatures() {
    return (
        <div className="w-[78%] my-0 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2 text-start">
                    <header>
                        <h4 className="text-start w-[200px] my-0 font-[Poppins] text-2xl font-bold">The Tool That Feels Like a..</h4>
                    </header>
                    <p className="text-[#808080] text-start w-[400px]">Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complete flexibility to create even the most powerful of products.</p>
                    <div>
                        <ul className="flex flex-col gap-2 text-black font-[Poppins] text-sm font-normal mt-4">
                            <div className="flex gap-1 items-center">
                                <FcCheckmark className="border-[#31C65B] border rounded-full p-0.5 bg-white" />
                                <li>Posting to social media, blogs, and messengers</li>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FcCheckmark className="border-[#31C65B] border rounded-full p-0.5 bg-white" />
                                <li>Working with images and videos</li>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FcCheckmark className="border-[#31C65B] border rounded-full p-0.5 bg-white"/>
                                <li>The Future of Writing Blog Articles</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <img src={featImage} alt="schedule image" />
            </div>
        </div>
    )
}
