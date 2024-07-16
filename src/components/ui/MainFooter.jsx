import texts from "../../sections.json";
import SocialButtons from "../Socials";

function MainFooter() {
  return (
    <footer className="items-center p-4 bg-white rounded-2xl max-w-[1440px] mx-auto mb-20 py-20 px-20 text-neutral-content grid md:grid-cols-2">
      <aside className="flex flex-col items-center md:items-start">
        <div
          className=" text-start"
          style={{
            backgroundColor: "none",
            border: "none",
          }}
        >
          <a className=" text-xl flex items-center gap-5" href="/#">
            <img src={texts["section-one"].logo} alt="logo" width={70} />
            <div className="flex">
              <h1 className="text-2xl font-bold text-[#252432]">
                {texts["section-one"].logoName1}
              </h1>
              <h1 className="text-2xl font-bold text-[#252432]">
                {texts["section-one"].logoName2}
              </h1>
            </div>
          </a>
        </div>
        <h1 className="mt-5">¿Quienes han confiado en nosotros?</h1>
        <p
          style={{ maxWidth: "520px" }}
          className="text-center md:text-start  pt-7 mb-5 md:mb-0 w-[400px]"
        >
          Desde empresas emergentes hasta empresas Fortune 500, empresas de
          diversas industrias han confiado en Seedchain.net para mejorar sus
          operaciones. Únase a las filas de nuestros clientes satisfechos y
          experimente la diferencia que podemos marcar.
        </p>
      </aside>
      <div>
        <nav className="text-center md:text-start flex flex-col gap-2 grid grid-cols-2 md:grid-cols-5 ">
          <a href="/#" className="hover:text-[#6953D3]">
            Principal
          </a>
          <a href="/#" className="hover:text-[#6953D3]">
            Páginas
          </a>
          <a href="/#" className="hover:text-[#6953D3]">
            Portafolio{" "}
          </a>
          <a href="/#" className="hover:text-[#6953D3]">
            Blog
          </a>
          <a href="/#" className="hover:text-[#6953D3]">
            Contacto
          </a>
        </nav>
        <div className="flex justify-center">
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
}
export default MainFooter;
