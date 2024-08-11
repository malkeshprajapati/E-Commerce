import GirlImg from "../../../../../assets/images/girl-img.png";
import NoDataFound from "../../../../../components/NoData";

function CartBody({ shortlistedItems, handleShortlistedProductRemove }) {
  if (!shortlistedItems.length) {
    return <NoDataFound message="Please add items to the cart" />;
  }

  return (
    <section className="px-5">
      <h3 className="font-MontserratMedium text-[18px]">Shopping Cart</h3>

      {shortlistedItems.map((value) => (
        <div key={value.id} className="flex my-3 animate-fadeIn">
          <img
            src={GirlImg}
            className="w-[175px] h-[234px] object-cover"
            alt={`girl-dress-preview-${value.id}`}
          />
          <div className="ml-5">
            <h3 className="font-MontserratMedium text-[18px]">{value.name}</h3>
            <p className="font-MontserratRegular text-[#4F4733] uppercase">
              <b className="mr-2 text-black font-MontserratSemiBold">
                {value.material}
              </b>
              {value.color}
            </p>
            <p className="my-3">INR {value.price}.00</p>
            <button
              onClick={(e) =>
                handleShortlistedProductRemove({ e, id: value.id })
              }
              className="bg-[#3F3737] text-white p-3"
            >
              Remove <b className="ml-3">X</b>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CartBody;
