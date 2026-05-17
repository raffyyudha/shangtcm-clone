export default function Hero() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="flex flex-col md:flex-row md:min-h-[80vh]">
        {/* Left side with logo */}
        <div className="w-full md:w-1/2 bg-[#9a9e86] flex flex-col items-center justify-center px-8 text-center text-white h-[65vh] md:h-auto">
          <img
            src="https://ext.same-assets.com/1270808772/826938556.png"
            alt="Shang TCM Logo"
            className="w-72 md:w-48 h-auto mb-4"
          />
          <p className="text-lg md:text-sm font-light opacity-90">Your Well-being, Our Virtue, Guided by Heart</p>
        </div>

        {/* Right side with team image - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2">
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
