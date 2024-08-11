import { memo } from "react";
import RightfitLogo from "../assets/images/rightfit_logo.png";
import PaymentTypes from "../assets/images/payment-options.png";
import DigicertLogo from "../assets/images/digicert-logo.png";

function Footer() {
  return (
    <footer className="bg-black text-sm text-white px-12 py-8">
      <img src={RightfitLogo} alt="Rightfit Logo" loading="lazy" />
      <div className="mt-8 flex justify-between">
        <ul>
          <li className="mb-3 cursor-pointer">Home</li>
          <li className="my-3 cursor-pointer">All Products</li>
          <li className="my-3 cursor-pointer">Featured Products</li>
          <li className="my-3 cursor-pointer">Contact</li>
          <li className="mt-3 cursor-pointer">About Us</li>
        </ul>
        <div>
          <p>
            We are a registered E-Commerce seller and we support a variety of
            Local and International
            <br /> payment modes
          </p>
          <img
            src={PaymentTypes}
            alt="Payment Types"
            loading="lazy"
            className="mt-5"
          />
        </div>

        <div>
          <p>Website powered by</p>
          <img
            src={DigicertLogo}
            alt="Digicert Logo"
            loading="lazy"
            className="mt-5"
          />
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
