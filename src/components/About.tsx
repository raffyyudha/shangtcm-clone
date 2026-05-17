import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://ext.same-assets.com/1270808772/396085691.webp"
            alt="Chinese Herbs"
            className="w-full h-auto rounded-sm"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl text-[#b5b099] font-normal mb-8 leading-tight">
            Committed To<br />Your Well-Being
          </h2>
          <p className="text-[#3c312d] text-sm leading-relaxed mb-4">
            Shang TCM, founded by Physician Lin Qing, is committed to promoting well-being and health through modernized Traditional Chinese Medicine (TCM).
          </p>
          <p className="text-[#3c312d] text-sm leading-relaxed mb-8">
            Shang TCM is dedicated to provide the highest quality and most effective TCM treatment methods to help patients from all walks of life.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[#3c312d] text-xs uppercase tracking-wider hover:text-[#b5b099] transition-colors"
          >
            More About Us
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
