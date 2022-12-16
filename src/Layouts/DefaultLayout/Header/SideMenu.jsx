import { List, XCircle, Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import menuList from "./menuList.json";

import MenuLv2 from "./mobile/MenuLv2";
function SideMenu() {
  const [isClose, setIsClose] = useState(true);
  const [isMenuLv2Close, setIsMenuLv2Close] = useState(true);
  const handlingSideBar = () => {
    setIsClose(!isClose);
  };
  const handlingMenuLv2 = () => {
    setIsMenuLv2Close(!isMenuLv2Close);
  };
  return (
    <>
      <button onClick={handlingSideBar} className="inline-block lg:hidden">
        <List size={28} className="mr-4 text-zinc-600" />
      </button>
      <div
        className={
          isClose
            ? "hidden "
            : "" +
              "absolute top-0 left-0 bg-slate-900/[.8] w-screen h-screen flex "
        }
      >
        <div className="side-menu bg-white py-2 pr-2 overflow-y-auto w-64">
          <div className="flex justify-end mb-2">
            <button onClick={handlingSideBar}>
              <XCircle size={28} />
            </button>
          </div>
          <hr></hr>
          <div>
            {menuList.map((menuItem, index) => {
              {
                if (!menuItem.menuLv2) {
                  return (
                    <div className="font-medium " key={index}>
                      <Link to={menuItem.path} className="block py-2 pl-3">
                        {menuItem.name}
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    // menu san pham
                    <div key={index}>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={handlingMenuLv2}
                      >
                        <div className="font-medium  py-2 pl-3 ">Sản phẩm</div>
                        <Plus size={16} />
                      </div>
                      <div
                        className={
                          isMenuLv2Close
                            ? "hidden"
                            : "block" + "menuLv2-container"
                        }
                      >
                        {menuItem.menuLv2.map((menuItem, index) => {
                          return <MenuLv2 menuLv2={menuItem} key={index} />;
                        })}
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
