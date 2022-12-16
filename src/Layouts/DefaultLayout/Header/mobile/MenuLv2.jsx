import { useState } from "react";
import { Plus } from "phosphor-react";
import MenuLv3 from "./MenuLv3";

function MenuLv2({ menuLv2 }) {
  const [isMenuLv3Close, setIsMenuLv3Close] = useState(true);
  const handlingMenuLv3 = () => {
    setIsMenuLv3Close(!isMenuLv3Close);
  };
  return (
    <>
      <div className="menuLv2" onClick={handlingMenuLv3}>
        <div className="flex items-center justify-between cursor-pointer pl-6">
          <div className="py-1">{menuLv2.name}</div>
          <Plus size={16} />
        </div>
      </div>
      <div
        className={isMenuLv3Close ? "hidden" : "block" + "menuLv2-container"}
      >
        {menuLv2.menuLv3.map((menuItem, index) => {
          return <MenuLv3 menuItem={menuItem} key={index} />;
        })}
      </div>
    </>
  );
}

export default MenuLv2;
