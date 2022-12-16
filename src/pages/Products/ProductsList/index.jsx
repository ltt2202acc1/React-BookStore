import ProductCard from "../../../components/ProductCard";

function ProductsList({ products }) {
  return (
    <div className="grid gap-3 grid-cols-12">
      {products.map((product) => {
        return (
          <div className="col-span-6 lg:col-span-3" key={product[0]}>
            <ProductCard productInfo={product[1]} productId={product[0]} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
