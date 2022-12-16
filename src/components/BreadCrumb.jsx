import { Link } from "react-router-dom";
import Wrapper from "./UI/Wrapper";
function BreadCrumb({ breadCrumbList }) {
  const newBreadCrumbList = [
    { name: "Trang chủ", path: "/" },
    ...breadCrumbList,
  ];
  return (
    <>
      <div className="breadcrumb  py-3 bg-slate-200">
        <Wrapper>
          {newBreadCrumbList.map((breadCrumb, index) => {
            if (index !== newBreadCrumbList.length - 1) {
              return (
                <span key={index}>
                  <Link to={breadCrumb.path} className="text-blue-500">
                    {breadCrumb.name}
                  </Link>{" "}
                  /{" "}
                </span>
              );
            } else {
              return (
                <span key={index} className="font-medium">
                  {" "}
                  {breadCrumb.name}
                </span>
              );
            }
          })}
        </Wrapper>
      </div>
    </>
  );
}

export default BreadCrumb;
