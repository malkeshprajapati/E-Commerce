import CartBody from "./components/CartBody";
import CartHeader from "./components/CartHeader";

function Cart({
  cartRef,
  count,
  isOpen,
  shortlistedItems,
  selectedFilter,
  handleShortlistedProductRemove,
  handleCartCategoryChange,
  handleCartToggle,
}) {
  return (
    <div
      ref={cartRef}
      className={`fixed top-0 right-0 bottom-0 w-[516px] h-screen bg-[#D9D9D9] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full overflow-y-auto">
        <CartHeader
          count={count}
          selectedFilter={selectedFilter}
          handleCartCategoryChange={handleCartCategoryChange}
          handleCartToggle={handleCartToggle}
        />
        <CartBody
          shortlistedItems={shortlistedItems}
          handleShortlistedProductRemove={handleShortlistedProductRemove}
        />
      </div>
    </div>
  );
}

export default Cart;
