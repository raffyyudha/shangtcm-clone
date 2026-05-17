import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-center">
        {/* Black container in place of the image */}
        <div className="w-full md:w-1/2">
          <div className="w-full aspect-[4/3] bg-black rounded-sm"></div>
        </div>

        {/* Content - replaced with xxxxxx */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl text-[#9a9e86] font-normal mb-6 md:mb-8 leading-tight">
            xxxxxx
          </h2>
          <p className="text-[#2c3e35] text-sm leading-relaxed mb-4">
            xxxxxx
          </p>
          <p className="text-[#2c3e35] text-sm leading-relaxed mb-6 md:mb-8">
            xxxxxx
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[#2c3e35] text-xs uppercase tracking-widest hover:text-[#9a9e86] transition-colors font-semibold"
          >
            xxxxxx
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
