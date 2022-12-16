import Wrapper from "../../../components/UI/Wrapper";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoMini.jpg";
import { UserCircle, Handbag, MagnifyingGlass, List } from "phosphor-react";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";
function Header() {
  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="header-wrap  shadow  top-0 pt-0.5">
        <Wrapper>
          <div className="flex items-center justify-between ">
            {/* header left  */}
            <div className="header-left flex items-center ">
              <SideMenu />
              <Link to="/">
                <img src={logo} alt="logo" className="h-14" />
              </Link>
            </div>
            {/* main menu  */}
            <MainMenu />
            {/* right menu  */}
            <div className="user-menu flex">
              <button>
                <MagnifyingGlass
                  size={28}
                  className="mr-1 hover:text-blue-400"
                />
              </button>
              <button>
                <UserCircle size={28} className="mx-1 hover:text-blue-400" />
              </button>
              <button>
                <Handbag size={28} className="ml-1 hover:text-blue-400" />
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </header>
  );
}

export default Header;
