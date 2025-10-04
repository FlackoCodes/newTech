import { useState } from "react";
import { useForm } from "react-hook-form";

const FormsData = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    compnay: "",
    meessage: "",
  });
};
export default function Forms() {
  return (
    <section className="w-[85%] my-0 mx-auto z-50 mb-20  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15),0_20px_40px_-20px_rgba(255,182,119,0.25)]">
      <form action="">
        <div className="bg-white rounded-2xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 -my-4">
            <div className="flex-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500 md:my-2"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 my-6">
            <div className="flex-1">
              <label
                htmlFor="company"
                className="block text-gray-700 font-medium mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              rows={6}
              cols={3}
              id="message"
              required
              className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="my-2">
            <button
              onClick={() => {
                console.log("Button clicked");
              }}
              type="submit"
              className="bg-black text-white rounded-full p-4 cursor-pointer font-sans"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
