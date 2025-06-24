import { Link } from "react-router-dom";

export default function Error_404() {
    return (
        <div>
            <div className="flex justify-center items-center my-8 bg-white">
                <h1 className="text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                    404
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row justify-between items-center p-4">
                    <div>
                        <p className="font-bold text-black text-lg my-4 w-auto md:w-[400px]">
                            This page has been removed or <span className="text-purple-600">doesn't exist</span>. We suggest you go back to the home page.
                        </p>

                    </div>
                    <Link to={"/"} className="bg-black text-white rounded-full py-2 px-4">Go Back Home</Link>
                </div>
            </div>
        </div>


    )
}
