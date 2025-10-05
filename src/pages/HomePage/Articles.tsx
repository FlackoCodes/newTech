import { articles } from "../../data";

export default function Articles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-8 justify-items-center">
      {articles.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center sm:text-left sm:items-start gap-4 max-w-[360px]"
        >
          <img
            src={item.Image}
            alt={item.title}
            className="rounded-md w-full h-[250px] object-cover"
          />

          <div className="flex justify-between border-b border-[#E0E0E0] w-full text-[#808080] text-sm font-bold">
            <p>{item.date}</p>
            <span>{item.read}</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#2F2F2F] text-xl font-bold font-[Poppins]">
              {item.title}
            </h4>
            <p className="text-[#808080] text-[15px] leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
