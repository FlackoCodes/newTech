function Global() {
  return (
    <>
      <header className="text-center my-12">
        <h3 className="my-4 ttext-[#2F2F2F] text-2xl lg:text-3xl">
          We're Global and Growing
        </h3>
        <p className="text-[#808080] text-lg w-[800px] my-0 mx-auto">
          Building an enterprise level site doesn't need nightmare or cost your
          thousands. Felix is purpose built
        </p>
      </header>
      <section className="w-[80%] my-0 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="rounded bg-[#F6F6F6] flex justify-center flex-col gap-2 py-16 px-12">
            <div className="flex justify-center">
              <span className="text-[#DD7FA1] text-lg font-bold bg-[#FFDCE9] rounded-full p-5">
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
              <span className="text-[#B1DEFF] text-lg font-bold bg-[#3694D8] rounded-full p-">
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
              <span className="text-[#DD7FA1] text-lg font-bold bg-[#C5E8C4] rounded-full p-4">
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
    </>
  );
}

export default Global;
