import { Link } from "react-router-dom";
function SubMenu({ menuLv2 }) {
  return (
    <>
      <div className="hidden group-hover:flex absolute top-100 right-60 shadow bg-white py-4 px-5 ">
        {menuLv2.map((menuItem, index) => {
          return (
            <div className="menu-item_column px-6" key={index}>
              <div className="column-tittle hover:text-blue-400 font-base font-medium mb-2 ">
                <Link to={menuItem.path} className="hover:text-blue-400">
                  {menuItem.name}
                </Link>
              </div>
              <div className="menu-lv3">
                {menuItem.menuLv3
                  ? menuItem.menuLv3.map((menuItem, index) => {
                      return (
                        <div className="my-1" key={index}>
                          <Link
                            to={menuItem.path}
                            className="hover:text-blue-400"
                          >
                            {menuItem.name}
                          </Link>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubMenu;
