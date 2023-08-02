
const Banner = () => {
  return (
    <div className="px-4" data-aos="zoom-in">
    <section className="px-3 py-5 bg-neutral-100 lg:py-10 rounded-md">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">
            HOT DEAL
          </p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 text-sm md:text-lg">For a limited time only!</p>
          <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
            Shop Now
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner;
