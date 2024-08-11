import GirlImg from "../../../../../../../assets/images/girl-img.png";

function ProductRenderer({ id, name, price, color, material, handleCart }) {
  return (
    <div className="text-[14px] w-[30%] animate-fadeIn">
      <div className="w-full h-[442px] relative group">
        <div className="absolute inset-0 bg-black bg-opacity-80 flex-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p
            className="text-white text-sm font-MontserratSemiBold cursor-pointer p-5"
            onClick={(e) => handleCart({ e, id, name, price, color, material })}
          >
            Add to Cart
          </p>
        </div>
        <img
          // network images are not accessible and I was getting below error when opened hence using figma image
          // The photo you were looking for doesn't match Unsplash Source's URL structure.
          src={GirlImg}
          alt={`girl-dress-preview-${id}`}
          className="w-full h-full shrink-0 object-cover"
        />
      </div>
      <h3 className="font-MontserratMedium text-[18px] mt-3">{name}</h3>
      <p className="font-MontserratRegular text-[#4F4733] uppercase">
        <b className="mr-2 text-black font-MontserratSemiBold">{material}</b>
        {color}
      </p>
      <p className="mt-2">INR {price}.00</p>
    </div>
  );
}

export default ProductRenderer;
