import { FcCheckmark } from "react-icons/fc";
import featImage from "../../images/img/featImage.png";
import { features } from "../../data";

export default function HomeFeatures() {
    return (
        <section className="mt-80">
            <div className="w-[78%] my-0 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-2 text-start">
                        <header>
                            <h4 className="text-start w-[200px] my-0 font-[Poppins] text-2xl font-bold">
                                The Tool That Feels Like a..
                            </h4>
                        </header>
                        <p className="text-[#808080] text-start md:w-[500px]">
                            Building an enterprise-level site doesn't need nightmare or cost your thousands. Felix is purpose-built for ease of use and complete flexibility to create even the most powerful of products.
                        </p>
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
                                    <FcCheckmark className="border-[#31C65B] border rounded-full p-0.5 bg-white" />
                                    <li>The Future of Writing Blog Articles</li>
                                </div>
                            </ul>
                        </div>
                        <button className="my-2 rounded-full bg-black text-white md:py-2 py-2 px-4 md:px-6 font-[Poppins] cursor-grab w-fit">Get Started</button>
                    </div>
                    <img src={featImage} alt="schedule image" />
                </div>
                <div className="my-8">
                    <header className="text-center font-bold text-2xl text-[#2F2F2F] my-2">
                        <h4>Simple, yet Powerful Features</h4>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            features.map((feature) => (
                                <div key={feature.id} className="rounded border border-[#DCDCDC] p-8">
                                    <div className="flex flex-col gap-2">
                                        <header>
                                            <h5 className="py-2 px-4 text-[#2F2F2F] font-[Poppins] text-lg rounded-4xl bg-[#F6F6F6] inline">
                                                {feature.header}
                                            </h5>
                                        </header>
                                        <div className="flex flex-col gap-2 border-b border-[#DCDCDC] my-2">
                                            <h4 className="text-[#2F2F2F] font-[Poppins] text-[12px] md:text-[16px] font-normal md:font-bold">
                                                {feature.title}
                                            </h4>
                                            <p className="text-[#808080] font-[Montserrat] text-sm font-normal mb-4">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center my-1">
                                            <img src={feature.icon} alt="feature icon" className="w-6" />
                                            <button className="hover:bg-[#5956E9]">{feature.start}</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
