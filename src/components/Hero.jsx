import homeImg from "../assets/home.png";


const Hero = () => {
  return (
    <section
      className="relative text-gray-600 body-font"
      style={{ backgroundColor: "#f6e6d9" }}
    >
      {/* Circular background behind the image */}
      <div
        className="hidden lg:block absolute bg-gradient-to-tr rounded-full z-0"
        style={{
          width: "60vh",
          height: "60vh",
          marginLeft: "25vh",
          marginTop: "15vh",
          backgroundColor: "#f1c19d",
        }}
      ></div>

      <div className="container px-5 py-20 mx-auto lg:flex lg:flex-wrap relative z-10">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={homeImg}
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 lg:mb-0">
          <h4 className="text-indigo-600 uppercase font-semibold tracking-wider">
            Discover Our Latest Collection
          </h4>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mt-2 mb-4">
            Elevate Your Style
          </h1>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
            Discover elegance. Handpicked premium products. Experience the
            extraordinary. Redefine your lifestyle with exclusives.
          </p>
          <div className="absolute bg-slate-800 text-white px-4 py-2 rounded-tl-lg">
            <span className="text-lg font-semibold">30% OFF</span>
            <br />
            <span className="text-sm">Use Coupon Code: SUMMER30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
