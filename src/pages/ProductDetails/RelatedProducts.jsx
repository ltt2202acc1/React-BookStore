import ProductCard from "../../components/ProductCard";
function RelatedProducts({ products }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-center mt-28 mb-6">
        Sản phẩm liên quan
      </div>
      <div className="grid gap-3 grid-cols-12">
        {products.map((product) => {
          return (
            <div className="col-span-6 lg:col-span-3" key={product[0]}>
              <ProductCard productInfo={product[1]} productId={product[0]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
