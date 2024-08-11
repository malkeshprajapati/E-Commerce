import CardSkeleton from "../../../../../../components/Loaders/CardSkeleton";
import NoDataFound from "../../../../../../components/NoData";
import { productColor, productMaterial } from "../../../../../../utils";
import PaginationRenderer from "./components/PaginationRenderer";
import ProductRenderer from "./components/ProductRenderer";

function Products({
  materialList,
  colorList,
  filteredProducts,
  currentPagination,
  firstCardIndex,
  lastCardIndex,
  totalPaginationLength,
  isProductsFetching,
  isFeaturedProductsFetching,
  isProductsError,
  isFeaturedProductsError,
  handlePagination,
  handleCart,
}) {
  if (isProductsFetching || isFeaturedProductsFetching) {
    return (
      <div className="w-full flex flex-wrap gap-10 pb-24 relative">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <CardSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (!filteredProducts.length || isProductsError || isFeaturedProductsError) {
    return (
      <div className="w-full">
        <NoDataFound message="No products available" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap gap-10 pb-24 relative">
      {filteredProducts
        .slice(firstCardIndex, lastCardIndex)
        .filter(Boolean)
        .map((product) => {
          const color = productColor({
            colorId: product?.colorId ?? "",
            colorList,
          });
          const material = productMaterial({
            materialId: product?.materialId ?? "",
            materialList,
          });
          return (
            <ProductRenderer
              key={product.id}
              id={product.id}
              name={product.name}
              // image={product.image} images are not accessible on the internet
              price={product.price}
              color={color}
              material={material}
              handleCart={handleCart}
            />
          );
        })}
      <PaginationRenderer
        currentPagination={currentPagination}
        totalPaginationLength={totalPaginationLength}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default Products;
