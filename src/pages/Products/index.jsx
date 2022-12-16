import BreadCrumb from "../../components/BreadCrumb";
import ProductsList from "./ProductsList";
import Wrapper from "../../components/UI/Wrapper";
import Filter from "./Filter";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
function Products() {
  const displayProducts = Object.entries(useLoaderData());

  const breadCrumbList = [
    { name: "Danh sách sản phẩm", path: "/products/all" },
  ];
  const data = {
    name: "spy x family tập 7",
    price: 20000,
    salePercentage: 10,
    importDate: new Date().toISOString(),
    category1: "thieunhi",
    category2: "manga-comic",
    amount: 20,
    author: "Tatsuya Endo",
    publishingCompany: "Kim Đồng",
    img: "https://cdn0.fahasa.com/media/catalog/product/s/p/spy-x-family-tap-1_1.jpg",
  };
  return (
    <>
      <BreadCrumb breadCrumbList={breadCrumbList} />
      <Wrapper>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-12 lg:col-span-3">
            <Filter />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <ProductsList products={displayProducts} />
          </div>
        </div>
        <div></div>
      </Wrapper>
    </>
  );
}
export async function loader({ params }) {
  if (params.category1 === "all") {
    const response = await fetch(
      "https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    return response.json();
  } else if (params.category2) {
    const response = await fetch(
      `https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?orderBy="category2/noAccents"&equalTo="${params.category2}"`
    );

    return response.json();
  } else if (params.category1) {
    const response = await fetch(
      `https://react-bookstore-3f517-default-rtdb.asia-southeast1.firebasedatabase.app/products.json?orderBy="category1/noAccents"&equalTo="${params.category1}"`
    );

    return response.json();
  }
}
export default Products;
