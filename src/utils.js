export const productColor = ({ colorId = "", colorList }) => {
  const colorName =
    colorList.find((color) => colorId === color?.id)?.name ?? "black";

  return colorName;
};

export const productMaterial = ({ materialId = "", materialList }) => {
  const materialName =
    materialList.find((material) => materialId === material?.id)?.name ??
    "cotton";

  return materialName;
};

export const filterProducts = (
  products,
  selectedFilter,
  featuredProductList
) => {
  const { materials, color, products: selectedCategory } = selectedFilter;

  if (
    materials.name === "All" &&
    color.name === "All" &&
    selectedCategory !== "Featured Products"
  ) {
    return products;
  }

  return products.filter((product) => {
    const matchMaterial =
      materials.name === "All" || product.materialId === materials.id;
    const matchColor = color.name === "All" || product.colorId === color.id;

    if (selectedCategory === "Featured Products") {
      const isFeatured = featuredProductList.some(
        (featuredProduct) => featuredProduct.productId === product.id
      );
      return isFeatured && matchMaterial && matchColor;
    }

    return matchMaterial && matchColor;
  });
};
