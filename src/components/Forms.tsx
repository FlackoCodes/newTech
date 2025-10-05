import { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forms() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const { fullName, email, subject, company, message } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const notify = () => toast.success("Form submitted successfully!");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    notify();
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="w-[85%] my-0 mx-auto z-50 mb-20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15),0_20px_40px_-20px_rgba(255,182,119,0.25)]">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 -my-4">
            <div className="flex-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                name="fullName"
                value={fullName}
                onChange={handleChange}
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
                name="email"
                value={email}
                onChange={handleChange}
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
                name="company"
                value={company}
                onChange={handleChange}
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
                name="subject"
                value={subject}
                onChange={handleChange}
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
              name="message"
              value={message}
              onChange={handleChange}
              rows={6}
              id="message"
              required
              className="w-full rounded border border-[#DCDCDC] bg-white p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="my-2">
            <button
              type="submit"
              className="bg-black text-white rounded-full p-4 cursor-pointer font-sans"
            >
              Send Message
            </button>
            <ToastContainer position="top-center" autoClose={2000} />
          </div>
        </div>
      </form>
    </section>
  );
}
