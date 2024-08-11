import { useQuery } from "@tanstack/react-query";
import fetchApi from "../../api";
import { useCallback, useEffect, useRef, useState } from "react";
import { filterProducts } from "../../utils";
import toast from "react-hot-toast";

const cardsPerPage = 6;

function useHomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState({
    materials: { id: 1000, name: "All" },
    color: { id: 1000, name: "All" },
    products: "All Products",
  });
  const [currentPagination, setCurrentPagination] = useState(1);
  const [isBannerinView, setIsBannerInView] = useState(true);
  const [cartState, setCartState] = useState({
    isOpen: false,
    totalCount: 0,
    cartSelectedFilter: "All Products",
    shortlistedItems: {},
  });

  const intersectionObserverRef = useRef();
  const cartRef = useRef();

  const {
    data: productData,
    isFetching: isProductsFetching,
    isError: isProductsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchApi("/products"),
  });
  const {
    data: materialData,
    isFetching: isMaterialDataFetching,
    isError: isMaterialDataError,
  } = useQuery({
    queryKey: ["materials"],
    queryFn: () => fetchApi("/material"),
  });
  const {
    data: colorData,
    isFetching: isColorDataFetching,
    isError: isColorDataError,
  } = useQuery({
    queryKey: ["colors"],
    queryFn: () => fetchApi("/colors"),
  });
  const {
    data: featuredProductData,
    isFetching: isFeaturedProductsFetching,
    isError: isFeaturedProductsError,
  } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => fetchApi("/featured"),
    enabled: selectedFilter.products === "Featured Products",
    staleTime: 300000, //5 mins
  });

  const productList = Array.isArray(productData?.products)
    ? productData.products
    : [];
  const materialList = Array.isArray(materialData?.material)
    ? [{ id: 1000, name: "All" }, ...materialData.material]
    : [{ id: 1000, name: "All" }];
  const colorList = Array.isArray(colorData?.colors)
    ? [{ id: 1000, name: "All" }, ...colorData.colors]
    : [{ id: 1000, name: "All" }];
  const featuredProductList = Array.isArray(featuredProductData?.featured)
    ? featuredProductData.featured
    : [];

  const filteredProducts = filterProducts(
    productList,
    selectedFilter,
    featuredProductList
  );

  const totalPaginationLength = Math.ceil(
    filteredProducts.length / cardsPerPage
  );

  const lastCardIndex = currentPagination * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const homeBannerRef = useCallback((element) => {
    if (intersectionObserverRef.current) {
      intersectionObserverRef.current.disconnect();
    }
    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBannerInView(true);
          } else {
            setIsBannerInView(false);
          }
        });
      },
      { threshold: 0.085 }
    );

    if (element) intersectionObserverRef.current.observe(element);
  }, []);

  const handleFilterActions = ({ title, id, name }) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      [title.toLowerCase()]: { id, name },
    }));
    setCurrentPagination(1);
  };

  const handleProductCategoryChange = ({ categoryType }) => {
    setSelectedFilter((prevState) => ({
      ...prevState,
      products: categoryType,
    }));
  };

  const handlePagination = ({ index }) => {
    setCurrentPagination(index);
  };

  const handleCart = ({ e, id, name, price, color, material }) => {
    e.stopPropagation();
    const newItem = { id, name, price, color, material };

    const previousShortlistedAllProductsItems =
      cartState.shortlistedItems["All Products"];
    const previousShortlistedFeaturedProductsItems =
      cartState.shortlistedItems["Featured Products"];

    const isNewItemAlreadyShortlistedInAll = previousShortlistedAllProductsItems?.find(
      (value) => value.id === id
    );
    const isNewItemAlreadyShortlistedInFeatured = previousShortlistedFeaturedProductsItems?.find(
      (value) => value.id === id
    );

    if (
      isNewItemAlreadyShortlistedInAll ||
      isNewItemAlreadyShortlistedInFeatured
    ) {
      toast.error("Item already added in cart");
      return null;
    }

    toast.success("Product succesfully added");
    setCartState((prevState) => ({
      ...prevState,
      totalCount: prevState.totalCount + 1,
      cartSelectedFilter: selectedFilter.products,
      isOpen: true, // opens on all cases
      // isOpen: !prevState.shortlistedItems[selectedFilter.products]?.length
      //   ? true
      //   : prevState.shortlistedItems[selectedFilter.products]
      //   ? false
      //   : true, // opens only when particular category cart is empty
      shortlistedItems: {
        ...prevState.shortlistedItems,
        [selectedFilter.products]: [
          ...(prevState.shortlistedItems[selectedFilter.products] ?? []),
          newItem,
        ],
      },
    }));
  };

  const handleShortlistedProductRemove = ({ e, id }) => {
    e.stopPropagation();
    toast.success("Product succesfully removed");

    setCartState((prevState) => ({
      ...prevState,
      totalCount: prevState.totalCount - 1,
      isOpen:
        prevState.shortlistedItems[prevState.cartSelectedFilter]?.length === 1
          ? false
          : true,
      shortlistedItems: {
        ...prevState.shortlistedItems,
        [prevState.cartSelectedFilter]: (
          prevState.shortlistedItems[prevState.cartSelectedFilter] ?? []
        ).filter((item) => item.id !== id),
      },
    }));
  };

  const handleCartCategoryChange = ({ e, categoryType }) => {
    e.stopPropagation();
    setCartState((prevState) => ({
      ...prevState,
      cartSelectedFilter: categoryType,
    }));
  };

  const handleCartToggle = (e) => {
    e.stopPropagation();
    setCartState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  useEffect(() => {
    const handleModalClose = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartState((prevState) => ({ ...prevState, isOpen: false }));
      }
    };
    document.addEventListener("click", handleModalClose);

    return () => document.removeEventListener("click", handleModalClose);
  }, []);

  return {
    materialList,
    colorList,
    selectedFilter,
    filteredProducts,
    currentPagination,
    firstCardIndex,
    lastCardIndex,
    totalPaginationLength,
    isBannerinView,
    cartState,
    cartRef,
    isProductsFetching,
    isFeaturedProductsFetching,
    isMaterialDataFetching,
    isColorDataFetching,
    isProductsError,
    isFeaturedProductsError,
    isMaterialDataError,
    isColorDataError,
    homeBannerRef,
    handleFilterActions,
    handlePagination,
    handleProductCategoryChange,
    handleCart,
    handleCartToggle,
    handleShortlistedProductRemove,
    handleCartCategoryChange,
  };
}

export default useHomeScreen;
