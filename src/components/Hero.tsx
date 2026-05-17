export default function Hero() {
  return (
    <section className="pt-20">
      <div className="flex flex-col md:flex-row">
        {/* Left side with logo */}
        <div className="w-full md:w-[35%] bg-[#b5b099] flex flex-col items-center justify-center py-16 px-8 text-center text-white min-h-[300px]">
          <img
            src="https://ext.same-assets.com/1270808772/826938556.png"
            alt="Shang TCM Logo"
            className="w-44 h-auto mb-6"
          />
          <p className="text-lg mb-2 font-light">上医，上德，上心</p>
          <p className="text-sm">Your Well-being, Our Virtue, Guided by Heart</p>
        </div>

        {/* Right side with team image */}
        <div className="w-full md:w-[65%]">
          <img
            src="https://ext.same-assets.com/1270808772/3608197895.jpeg"
            alt="Shang TCM Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
