import Wrapper from "../../components/UI/Wrapper";
import BreadCrumb from "../../components/BreadCrumb";
import usePriceFormat from "../../hooks/usePriceFormat";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import InputStepper from "./InputStepper";
import RelatedProducts from "./RelatedProducts";
function ProductDetails() {
  const {
    amount,
    author,
    category1,
    category2,
    img,
    importDate,
    name,
    price,
    publishingCompany,
    salePercentage,
  } = useLoaderData();
  const breadCrumbList = [
    { name: "Danh sách sản phẩm", path: "/products/all" },
    { name: category1.accents, path: `/products/${category1.noAccents}` },
    {
      name: category2.accents,
      path: `/products/${category1.noAccents}/${category2.noAccents}`,
    },
    { name: name },
  ];
  const [relatedProducts, setRelatedProducts] = useState([]);
  const priceAfterSale = price - (price * salePercentage) / 100;
  useEffect(() => {
    fetch(
      `https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?orderBy="category2/noAccents"&equalTo="${category2.noAccents}"&limitToLast=4`
    )
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(Object.entries(data));
      });
  }, []);
  return (
    <>
      <BreadCrumb breadCrumbList={breadCrumbList} />
      <Wrapper>
        <div className="grid grid-cols-12 my-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="product-img">
              <img src={img} alt={name}></img>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="product-info">
              <h1 className="text-2xl font-medium ">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </h1>

              <div className="my-2">
                <div>
                  <span className="text-sm">Nhà xuất bản: </span>
                  <span className="text-blue-500 font-medium">
                    {publishingCompany}
                  </span>
                </div>
                <div>
                  <span className="text-sm">Thể loại: </span>
                  <span className="text-blue-500 font-medium">
                    {category2.accents}
                  </span>
                </div>
                <div>
                  <span className="text-sm">Tác giả: </span>
                  <span className="text-blue-500 font-medium">{author}</span>
                </div>
                <div className="">
                  <div className=" text-sm mt-4">Mô tả: </div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptate repellendus, est doloremque deleniti quidem
                    consequuntur rem dolores minus ullam vel odio laudantium
                    corporis corrupti odit illo non. Iste repellat, dolores
                    facilis quas aperiam exercitationem. Dolor, saepe quasi!
                    Sunt, officia repellendus?
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xl text-red-700 font-medium  mr-2 ">
                  {usePriceFormat(priceAfterSale)}
                </span>
                <span className="text-sm line-through">
                  {usePriceFormat(price)}
                </span>
              </div>

              <InputStepper amount={amount} />
              <div className=" text-sm mt-2">
                Số lượng hiện có: <span>{amount}</span>
              </div>
              <div className="button-group mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-bold py-2 px-12 rounded ">
                  Mua ngay
                </button>
                <button className="bg-white hover:bg-blue-700 hover:text-white transition-all duration-200 text-blue-500 border border-sky-500 font-bold py-2 px-4 rounded ml-4">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={relatedProducts} />
      </Wrapper>
    </>
  );
}
export async function loader({ params }) {
  const response = await fetch(
    `https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products/${params.productId}.json`
  );
  return response.json();
}
export default ProductDetails;
