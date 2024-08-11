import CartBlackImg from "../../../../../assets/images/cart_black.png";

function CartHeader({ selectedFilter, count, handleCartCategoryChange }) {
  return (
    <ul className="flex gap-x-[40px] text-black p-8">
      <li
        className={`cursor-pointer ml-5 ${
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
    </ul>
  );
}

export default CartHeader;
