import Filter from "./components/Filter";
import Products from "./components/Products";

function ProductSection({
  materialList,
  colorList,
  selectedFilter,
  filteredProducts,
  currentPagination,
  firstCardIndex,
  lastCardIndex,
  totalPaginationLength,
  isProductsFetching,
  isFeaturedProductsFetching,
  isMaterialDataFetching,
  isColorDataFetching,
  isProductsError,
  isFeaturedProductsError,
  isMaterialDataError,
  isColorDataError,
  handleFilterActions,
  handlePagination,
  handleCart,
}) {
  return (
    <section className="px-8 py-10 flex">
      <Filter
        materialList={materialList}
        colorList={colorList}
        selectedFilter={selectedFilter}
        isMaterialDataFetching={isMaterialDataFetching}
        isColorDataFetching={isColorDataFetching}
        isMaterialDataError={isMaterialDataError}
        isColorDataError={isColorDataError}
        handleFilterActions={handleFilterActions}
      />
      <Products
        materialList={materialList}
        colorList={colorList}
        filteredProducts={filteredProducts}
        currentPagination={currentPagination}
        firstCardIndex={firstCardIndex}
        lastCardIndex={lastCardIndex}
        totalPaginationLength={totalPaginationLength}
        isProductsFetching={isProductsFetching}
        isFeaturedProductsFetching={isFeaturedProductsFetching}
        isProductsError={isProductsError}
        isFeaturedProductsError={isFeaturedProductsError}
        handlePagination={handlePagination}
        handleCart={handleCart}
      />
    </section>
  );
}

export default ProductSection;
