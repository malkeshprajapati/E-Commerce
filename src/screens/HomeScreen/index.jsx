import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import Cart from "./components/Cart";
import ModelBanner from "./components/ModelBanner";
import ProductSection from "./components/ProductSection";
import useHomeScreen from "./useHomeScreen";
import Footer from "../../components/Footer";

function HomeScreen() {
  const {
    materialList,
    colorList,
    filteredProducts,
    currentPagination,
    selectedFilter,
    firstCardIndex,
    lastCardIndex,
    totalPaginationLength,
    isBannerinView,
    cartState,
    cartRef,
    homeBannerRef,
    handleFilterActions,
    isProductsFetching,
    isFeaturedProductsFetching,
    isMaterialDataFetching,
    isColorDataFetching,
    isProductsError,
    isFeaturedProductsError,
    isMaterialDataError,
    isColorDataError,
    handlePagination,
    handleProductCategoryChange,
    handleCart,
    handleCartToggle,
    handleShortlistedProductRemove,
    handleCartCategoryChange,
  } = useHomeScreen();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header
        isBannerinView={isBannerinView}
        count={cartState.totalCount}
        selectedFilter={selectedFilter.products}
        handleProductCategoryChange={handleProductCategoryChange}
        handleCartToggle={handleCartToggle}
      />
      <ModelBanner homeBannerRef={homeBannerRef} />
      <ProductSection
        materialList={materialList}
        colorList={colorList}
        filteredProducts={filteredProducts}
        currentPagination={currentPagination}
        selectedFilter={selectedFilter}
        totalPaginationLength={totalPaginationLength}
        firstCardIndex={firstCardIndex}
        lastCardIndex={lastCardIndex}
        isProductsFetching={isProductsFetching}
        isFeaturedProductsFetching={isFeaturedProductsFetching}
        isMaterialDataFetching={isMaterialDataFetching}
        isColorDataFetching={isColorDataFetching}
        isMaterialDataError={isMaterialDataError}
        isColorDataError={isColorDataError}
        isProductsError={isProductsError}
        isFeaturedProductsError={isFeaturedProductsError}
        handleFilterActions={handleFilterActions}
        handlePagination={handlePagination}
        handleCart={handleCart}
      />
      <Footer />
      <Cart
        cartRef={cartRef}
        isOpen={cartState.isOpen}
        count={cartState.totalCount}
        shortlistedItems={
          cartState.shortlistedItems[cartState.cartSelectedFilter] ?? []
        }
        selectedFilter={cartState.cartSelectedFilter}
        handleShortlistedProductRemove={handleShortlistedProductRemove}
        handleCartCategoryChange={handleCartCategoryChange}
      />
    </>
  );
}

export default HomeScreen;
