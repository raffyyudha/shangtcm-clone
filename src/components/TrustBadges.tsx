export default function TrustBadges() {
  return (
    <section className="py-8 md:py-14 px-4 bg-[#eceade] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        
        {/* Logos wrapper for mobile: side-by-side, large, and highlighted */}
        <div className="flex flex-row items-center justify-center gap-8 sm:gap-12 animate-slide-left">
          {/* CDC Board */}
          <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
            <img
              src="/cdc board.png"
              alt="Traditional Chinese Medicine Practitioners Board"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain"
            />
          </div>

          {/* CDC Voucher */}
          <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
            <img
              src="/cdcvoucher.png"
              alt="CDC Voucher Accepted"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Google Reviews - Large, Prominent, and Full-Width/Centered on mobile */}
        <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-none md:w-auto bg-white rounded-xl shadow-md px-6 py-4 md:px-8 md:py-5 flex items-center justify-center gap-4 md:gap-6 border border-gray-100 flex-shrink-0 animate-slide-right hover-lift cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/google.png"
              alt="Google 5.0 Stars"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="border-l-2 border-gray-200 pl-4 md:pl-6 text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e35] leading-none mb-1">5.0</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-none">42 Reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
}
