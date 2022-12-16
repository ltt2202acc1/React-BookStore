import { Link } from "react-router-dom";
import usePriceFormat from "../../hooks/usePriceFormat";
function ProductCard({ productInfo, productId }) {
  const priceAfterSale =
    productInfo.price - (productInfo.price * productInfo.salePercentage) / 100;
  return (
    <Link to={`${productInfo.path}/${productId}`}>
      <div className="product-card border py-1 relative group">
        <>
          <div className="product-img mb-2">
            <img src={productInfo.img}></img>
          </div>
          <div className="product-info py-2 px-2">
            <div className="product-name ">
              {productInfo.name.charAt(0).toUpperCase() +
                productInfo.name.slice(1)}
            </div>
            <span className="product-price-bf line-through mr-1 text-xs">
              {usePriceFormat(productInfo.price)}
            </span>
            <span className="product-price font-lg font-medium text-red-700">
              {usePriceFormat(priceAfterSale)}
            </span>
          </div>
        </>
        <div className="tool hidden absolute inset-1/2 group-hover:block">
          tool
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
