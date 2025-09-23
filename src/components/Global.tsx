import FAQ from "./FAQ";

function Global() {
  return (
    <>
      <header className="text-center my-12">
        <h3 className="my-4 text-[#2F2F2F] text-2xl font-bold lg:text-3xl">
          We're Global and Growing
        </h3>
        <p className="text-[#808080] text-lg md:w-[600px] my-0 mx-auto">
          Building an enterprise level site doesn't need nightmare or cost your
          thousands. Felix is purpose built
        </p>
      </header>
      <section className="w-[80%] my-0 mx-auto">
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-8">
          <div className="rounded bg-[#F6F6F6] flex justify-center flex-col gap-2 py-16 px-12">
            <div className="flex justify-center">
              <span className="text-[#DD7FA1] text-lg font-semibold bg-[#FFDCE9] rounded-full p-5">
                USA
              </span>
            </div>
            <h4 className="text-center text-[#2F2F2F] font-bold">
              United States
            </h4>
            <p className="text-center text-[#808080] w-[250px] my-0 mx-auto">
              55/123 Norman Street, Sydney NSW 20
            </p>
          </div>
          <div className="rounded bg-[#F6F6F6] flex justify-center flex-col gap-2 py-16 px-12">
            <div className="flex justify-center">
              <span className="text-[#B1DEFF] text-lg font-semibold bg-[#3694D8] rounded-full p-5">
                AUS
              </span>
            </div>
            <h4 className="text-center text-[#2F2F2F] font-bold">AUSTRALIA</h4>
            <p className="text-center text-[#808080] w-[250px] my-0 mx-auto">
              55/123 Norman Street, Sydney NSW 20
            </p>
          </div>
          <div className="rounded bg-[#F6F6F6] flex justify-center flex-col gap-2 py-16 px-12">
            <div className="flex justify-center">
              <span className="text-[#DD7FA1] text-lg font-semibold bg-[#C5E8C4] rounded-full p-5">
                UK
              </span>
            </div>
            <h4 className="text-center text-[#2F2F2F] font-bold">
              United Kingdom
            </h4>
            <p className="text-center text-[#808080] w-[250px] my-0 mx-auto">
              55/123 Norman Street, Sydney NSW 20
            </p>
          </div>
        </div>
      </section>
      <section id="faq" className="w-[80%] my-0 mx-auto">
        <div className="my-6 md:my-16">
          {/* <header className="text-center">
            <h4 className="text-[#2f2f2f] text-3xl font-bold">
              Frequently Asked Questions
            </h4>
          </header> */}
          <FAQ />
        </div>
      </section>
    </>
  );
}

export default Global;
