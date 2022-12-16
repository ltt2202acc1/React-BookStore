import { Link } from "react-router-dom";
function MenuLv3({ menuItem }) {
  return (
    <div className="pl-10 py-1">
      <Link to={menuItem.path} className="block">
        {menuItem.name}
      </Link>
    </div>
  );
}

export default MenuLv3;
