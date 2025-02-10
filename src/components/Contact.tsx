export default function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-6xl m-auto">
        <h1 className="font-brutalno2 text-[#ffffff] text-4xl text-center leading-tight">
          Pronto para transformar sua ideia em impacto?
        </h1>
        <div className="grid grid-cols-12 gap-6 justify-center items-center mt-16">
          <div className="col-start-2 col-span-3">
            <hr className="bg-[#EFEFEF]" />
          </div>
          <p className="col-start-5 col-span-4 font-elgraineItalic bg-[#EFEFEF] text-xl text-center">
            Entre em contato com o Studio Santa Ideia e descubra como podemos
            criar algo personalizado para a sua marca.
          </p>
          <div className="col-start-9 col-span-3">
            <hr className="bg-[#EFEFEF]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 max-w-6xl pt-16 m-auto gap-6">
        <div className="col-start-2 col-span-10 border border-off-white p-3 rounded-lg">
          <div className="flex flex-col justify-center h-full gap-2">
            <label htmlFor="name" className="bg-[#EFEFEF] font-nordMedium">
              Nome*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent bg-[#EFEFEF]"
              placeholder="janesmith"
            />
          </div>
        </div>
        <div className="col-start-2 col-span-5 border border-off-white p-3 rounded-lg">
          <div className="flex flex-col justify-center h-full gap-2">
            <label htmlFor="name" className="bg-[#EFEFEF] font-nordMedium">
              Nome*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent bg-[#EFEFEF] p-2"
              placeholder="janesmith"
            />
          </div>
        </div>
        <div className="col-start-7 col-span-5 border border-off-white p-3 rounded-lg">
          <div className="flex flex-col justify-center h-full gap-2">
            <label htmlFor="name" className="bg-[#EFEFEF] font-nordMedium">
              Nome*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent bg-[#EFEFEF] p-2"
              placeholder="janesmith"
            />
          </div>
        </div>
        <div className="col-start-2 col-span-10 border border-off-white p-3 rounded-lg">
          <div className="flex flex-col justify-center h-full gap-2">
            <label htmlFor="mensagem" className="bg-[#EFEFEF] font-nordMedium">
              Mensagem*
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              className="w-full bg-transparent bg-[#EFEFEF] text-lg p-2"
              rows={8}
            ></textarea>
          </div>
        </div>
        <div className="col-start-2 col-span-10">
          <button className="block font-nordMedium text-[#323232] bg-[#323232] uppercase w-full text-center p-3 rounded-lg">
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
}