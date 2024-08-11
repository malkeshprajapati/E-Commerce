import ModelBg from "../../../assets/images/model-bg.png";

function ModelBanner({ homeBannerRef }) {
  return (
    <section
      ref={homeBannerRef}
      className="bg-cover bg-no-repeat h-screen flex items-center"
      style={{
        backgroundImage: `url(${ModelBg})`,
      }}
    >
      <div className="relative left-28 text-white">
        <h1 className="text-[64px] font-black">Latest Styles</h1>
        <p className="text-[20px] font-extrabold -mt-3">
          At Yesterday&apos;s Prices
        </p>
        <button className="mt-3 bg-[#ca4022] rounded-[10px] p-3">
          BROWSE ALL STYLES
        </button>
      </div>
    </section>
  );
}

export default ModelBanner;
