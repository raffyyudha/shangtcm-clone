import Link from "next/link";

export default function Approach() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left side with text */}
      <div className="w-full md:w-1/2 bg-[#b5b099] py-16 px-8 md:px-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl text-white font-normal mb-8">
          Our Approach
        </h2>
        <p className="text-white/90 text-sm leading-relaxed mb-4">
          At Shang TCM, we pride ourselves as providers of effective and quality TCM services amidst a pleasant, comfortable environment.
        </p>
        <p className="text-white/90 text-sm leading-relaxed mb-8">
          We aim to use the wisdom of ancient Chinese Medicine inherited from thousands of years ago, enhanced with modern scientific knowledge and technology, to restore your health in the most natural manner.
        </p>
        <Link
          href="/our-team"
          className="inline-flex items-center text-white text-xs uppercase tracking-wider hover:opacity-80 transition-opacity"
        >
          Meet The Team
          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Right side with image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://ext.same-assets.com/1270808772/1881253147.jpeg"
          alt="TCM Consultation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
