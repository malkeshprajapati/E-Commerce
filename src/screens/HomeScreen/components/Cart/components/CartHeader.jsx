import CartBlackImg from "../../../../../assets/images/cart_black.png";

const closeIcon = (
  <svg
    fill="#000000"
    height="20px"
    width="20px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
  >
    <polygon
      points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
489.292,457.678 277.331,245.004 489.292,32.337 "
    />
  </svg>
);

function CartHeader({
  selectedFilter,
  count,
  handleCartCategoryChange,
  handleCartToggle,
}) {
  return (
    <ul className="flex gap-x-[20px] justify-between text-black p-8">
      <li
        className={`cursor-pointer  ${
          selectedFilter === "All Products"
            ? "font-MontserratSemiBold"
            : "font-MontserratRegular"
        }`}
        onClick={(e) =>
          handleCartCategoryChange({ e, categoryType: "All Products" })
        }
      >
        All Products
      </li>
      <li
        className={`cursor-pointer ${
          selectedFilter === "Featured Products"
            ? "font-MontserratSemiBold"
            : "font-MontserratRegular"
        }`}
        onClick={(e) =>
          handleCartCategoryChange({ e, categoryType: "Featured Products" })
        }
      >
        Featured Products
      </li>
      <li className="flex gap-x-5 cursor-pointer">
        <img
          src={CartBlackImg}
          alt="Rightfit Logo"
          loading="eager"
          className="w-5 h-5 object-contain"
        />
        <b>{count}</b>
      </li>
      <li
        onClick={(e) => handleCartToggle(e)}
        className="text-xl cursor-pointer"
      >
        {closeIcon}
      </li>
    </ul>
  );
}

export default CartHeader;
