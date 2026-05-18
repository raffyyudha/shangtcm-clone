export default function Hero() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="flex flex-col md:flex-row md:min-h-[80vh] overflow-hidden">
        {/* Left side with logo */}
        <div className="w-full md:w-1/2 bg-[#7cb3e0] flex flex-col items-center justify-center px-8 text-center text-white h-[65vh] md:h-auto">
          <img
            src="https://ext.same-assets.com/1270808772/826938556.png"
            alt="Shang TCM Logo"
            className="w-72 md:w-48 h-auto mb-4 animate-scale-in"
            style={{ filter: "hue-rotate(135deg) saturate(1.8) brightness(1.1)" }}
          />
          <p className="text-lg md:text-sm font-light opacity-90 animate-fade-in-up delay-200">
            Your Well-being, Our Virtue, Guided by Heart
          </p>
        </div>

        {/* Right side with team image - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2 overflow-hidden">
          <img
            src="https://ext.same-assets.com/1270808772/3608197895.jpeg"
            alt="Shang TCM Team"
            className="w-full h-full object-cover animate-fade-in delay-100 hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
