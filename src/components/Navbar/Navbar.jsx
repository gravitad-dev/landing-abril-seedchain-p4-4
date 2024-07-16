import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../sections.json";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();

  return (
    <div className=" flex justify-between px-5 lg:px-10 py-10">
      <div className="my-auto">
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
      <div className="justify-between hidden lg:flex items-center ">
        <ul className="menu menu-horizontal  font-semibold py-4 px-5 gap-16 bg-white bg-opacity-34 border rounded-2xl">
          <li className="hover:text-[#6953D3]">
            <a href="/#home">{texts["section-one"].item1}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#about">{texts["section-one"].item2}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#works">{texts["section-one"].item3}</a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a
              href="http://blog.seedchain.net/"
              target="_blank"
              rel="noreferrer"
            >
              {texts["section-one"].item4}
            </a>
          </li>
          <li className="hover:text-[#6953D3]">
            <a href="/#services">{texts["section-one"].item5}</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a
          className="flex items-center  px-3 py-2 rounded-5"
          href="/#"
          style={{ opacity: "50%" }}
        >
          Ingresa
        </a>
        <div className="flex items-center">
          <a
            className="flex items-center btn  gap-2 px-6 py-2 rounded-5"
            href="mailto:seedChain@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: "#C0F2E6", color: "#252432" }}
          >
            Contáctanos
          </a>
        </div>
      </div>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
};
export default Navbar;
