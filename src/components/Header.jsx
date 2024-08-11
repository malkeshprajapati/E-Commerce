import RightfitLogo from "../assets/images/rightfit_logo.png";
import RightfitBlackLogo from "../assets/images/rightfit_logo_black.png";
import CartImg from "../assets/images/cart.png";
import CartBlackImg from "../assets/images/cart_black.png";
// we could also handled this using svgs and dynamicaally change color of svg

function Header({
  isBannerinView,
  count,
  selectedFilter,
  handleProductCategoryChange,
  handleCartToggle,
}) {
  return (
    <header className="fixed z-10 top-0 left-0 right-0 p-8 bg-transparent flex justify-between items-center">
      <img
        src={isBannerinView ? RightfitLogo : RightfitBlackLogo}
        alt="Rightfit Logo"
        loading="eager"
      />
      <nav>
        <ul
          className={`flex gap-x-[60px] ${
            isBannerinView ? "text-white" : "text-black"
          }`}
        >
          <li
            className={`cursor-pointer ${
              selectedFilter === "All Products"
                ? "font-MontserratSemiBold"
                : "font-MontserratRegular"
            }`}
            onClick={() =>
              handleProductCategoryChange({ categoryType: "All Products" })
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
            onClick={() =>
              handleProductCategoryChange({ categoryType: "Featured Products" })
            }
          >
            Featured Products
          </li>
          <li
            className="flex gap-x-5 cursor-pointer"
            onClick={handleCartToggle}
          >
            <img
              src={isBannerinView ? CartImg : CartBlackImg}
              alt="Rightfit Logo"
              loading="eager"
              className="w-5 h-5 object-contain"
            />
            <b>{count}</b>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
