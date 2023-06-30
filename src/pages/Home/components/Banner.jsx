const Banner = () => {
  return (
    <section className="h-full flex justify-center items-center py-20 gap-5 bg-gradient-to-r from-[#7373FF] to-mainColor text-white px-[70px] ">
      <div className="text-center w-full">Content 1</div>
      <div className="text-center w-full space-y-5">
        <h1 className="font-lobsterTwo text-4xl">About me</h1>
        <p className="font-signika">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi
          dignissimos totam, beatae, nihil impedit ratione illum vero quis optio
          exercitationem id eligendi aliquid facilis voluptatibus numquam
          facere, eum quae.
        </p>
      </div>
    </section>
  );
};

export default Banner;
