import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
import menuList from "./menuList.json";
function MainMenu() {
  return (
    <div className="main-menu  hidden lg:flex ">
      {menuList.map((menuItem, index) => {
        return (
          <div
            className="main-menu_item  group mx-6 transition-all duration-200  "
            key={index}
          >
            <Link
              to={menuItem.path}
              className="hover:text-blue-400 text-lg font-medium block pt-3 pb-4"
            >
              {menuItem.name}
            </Link>
            {/* kiem tra xem co menu cap 2 hay khong, neu co thi render */}
            {menuItem.menuLv2 ? <SubMenu menuLv2={menuItem.menuLv2} /> : ""}
          </div>
        );
      })}
    </div>
  );
}

export default MainMenu;
