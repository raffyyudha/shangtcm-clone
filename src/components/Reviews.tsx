"use client";

import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    name: "Shang TCM (Boon Lay) Pte Ltd",
    rating: 4.9,
    reviews: 437,
    image: "https://ext.same-assets.com/1270808772/3145714934.jpeg",
    testimonials: [
      {
        name: "Jade Chang",
        time: "3 months ago",
        text: "I came across this TCM clinic and met Dr Wang. He's experienced and knew exactly what my pain points were when I told him my issue. He did acupuncture for me and I felt immediate relief. Highly recommend!",
        avatar: "J",
        avatarBg: "bg-teal-600",
      },
      {
        name: "Melanie Chang",
        time: "6 months ago",
        text: "Tcm physician Wang Dong was very detailed and patient in explaining my issues. Price was affordable and is conveniently located at boon lay.",
        avatar: "M",
        avatarBg: "bg-pink-700",
      },
      {
        name: "Ms Sim",
        time: "7 months ago",
        text: "Doctor Lin Qing treated me very patiently. Finally got good result. we felt happy and great fully and appreciated doctor Lin Qing. Thank you so much.",
        avatar: "S",
        avatarBg: "bg-blue-600",
      },
      {
        name: "JIE WANG",
        time: "5 months ago",
        text: "Very good experience of the 1st visiting here. Easy to find this place just at Boon lay. Took medicine will see the results. They all have good attitude.",
        avatar: "W",
        avatarBg: "bg-purple-600",
      },
    ],
  },
  {
    name: "Shang TCM (Waterloo) Pte Ltd",
    rating: 4.9,
    reviews: 309,
    image: "https://ext.same-assets.com/1270808772/1047257311.jpeg",
    testimonials: [
      {
        name: "yating kee",
        time: "6 months ago",
        text: "The clinic was clean and tidy, receptionist was kind and friendly, and the TCM practitioner was very professional and patient. Will come again.",
        avatar: "Y",
        avatarBg: "bg-indigo-600",
      },
      {
        name: "Raelene Chan",
        time: "6 months ago",
        text: "Doctor is fast in diagnosing my issue n giving suggestions on doing acupuncture & cupping as part of treatment. Had a nice nap during the session.",
        avatar: "R",
        avatarBg: "bg-emerald-600",
      },
      {
        name: "Alex Tan",
        time: "8 months ago",
        text: "Very professional service. The acupuncture session was highly effective for my lower back pain. Recommend to anyone looking for experienced practitioners.",
        avatar: "A",
        avatarBg: "bg-orange-600",
      },
    ],
  },
  {
    name: "Shang TCM (Kovan) Pte Ltd",
    rating: 4.8,
    reviews: 75,
    image: "https://ext.same-assets.com/1270808772/3521946088.jpeg",
    testimonials: [
      {
        name: "Edwina Koh",
        time: "2 months ago",
        text: "I consulted Physician Lin Qing many years ago for my women's health condition, and she helped to regulate and improve my health at that time.",
        avatar: "E",
        avatarBg: "bg-rose-600",
      },
      {
        name: "Fiona Seah",
        time: "1 month ago",
        text: "Brand new clean facility. The physician was extremely knowledgeable and spent time listening to my health history. Highly recommend Kovan branch!",
        avatar: "F",
        avatarBg: "bg-amber-600",
      },
      {
        name: "Daniel Lim",
        time: "9 months ago",
        text: "Excellent service from start to finish. The herbal prescription helped my chronic cough significantly. Friendly staff too.",
        avatar: "D",
        avatarBg: "bg-sky-600",
      },
    ],
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  // Track carousel slide index for each location branch
  const [slideIndices, setSlideIndices] = useState<number[]>([0, 0, 0]);

  const handlePrev = (locIndex: number, total: number) => {
    setSlideIndices((prev) => {
      const next = [...prev];
      next[locIndex] = (next[locIndex] - 1 + total) % total;
      return next;
    });
  };

  const handleNext = (locIndex: number, total: number) => {
    setSlideIndices((prev) => {
      const next = [...prev];
      next[locIndex] = (next[locIndex] + 1) % total;
      return next;
    });
  };

  const setSlide = (locIndex: number, slideIdx: number) => {
    setSlideIndices((prev) => {
      const next = [...prev];
      next[locIndex] = slideIdx;
      return next;
    });
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-[#f0f7fc]/30">
      <div className="max-w-xl mx-auto space-y-16">
        {locations.map((location, locIndex) => {
          const currentSlide = slideIndices[locIndex];
          const testimonial = location.testimonials[currentSlide];
          const totalSlides = location.testimonials.length;

          return (
            <div key={locIndex} className="bg-transparent">
              {/* Branch Header exactly like screenshot */}
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={60}
                  height={60}
                  className="w-14 h-14 rounded-full object-cover shadow-sm flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[#f5a623] font-bold text-sm leading-none">{location.rating}</span>
                    <StarRating rating={5} />
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">
                    Based on {location.reviews} reviews
                  </p>
                  <p className="text-xs text-gray-400">
                    powered by <span className="text-[#4285F4] font-bold font-sans">G</span>
                    <span className="text-[#EA4335] font-bold font-sans">o</span>
                    <span className="text-[#FBBC05] font-bold font-sans">o</span>
                    <span className="text-[#4285F4] font-bold font-sans">g</span>
                    <span className="text-[#34A853] font-bold font-sans">l</span>
                    <span className="text-[#EA4335] font-bold font-sans">e</span>
                  </p>
                </div>
              </div>

              {/* Blue Review Us Button exactly like screenshot */}
              <div className="mb-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 bg-[#2563eb] text-white text-xs font-semibold tracking-wider px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                >
                  review us on
                  <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#2563eb] text-[10px] font-black font-sans">G</span>
                  </span>
                </a>
              </div>

              {/* Interactive Testimonial Slider Panel */}
              <div className="relative px-2">
                {/* Left Navigation Arrow */}
                <button
                  onClick={() => handlePrev(locIndex, totalSlides)}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors z-20"
                  aria-label="Previous review"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Testimonial Card */}
                <div className="bg-[#fcfbf9] border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm min-h-[190px] flex flex-col justify-between relative">
                  
                  {/* Google Logo badge at top right */}
                  <div className="absolute top-4 right-4 text-[#4285F4]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>

                  <div>
                    {/* User profile section */}
                    <div className="flex items-center gap-3 mb-3">
                      {/* Avatar with orange star badge */}
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg || "bg-teal-600"} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}>
                          {testimonial.avatar}
                        </div>
                        {/* Orange star badge at bottom right */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#f5a623] border border-white flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold text-blue-700 leading-tight">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.time}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <StarRating rating={5} />
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() => handleNext(locIndex, totalSlides)}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors z-20"
                  aria-label="Next review"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicator dots exactly like screenshot */}
              <div className="flex justify-center gap-1.5 mt-4">
                {location.testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setSlide(locIndex, dotIdx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === dotIdx ? "bg-[#f5a623] scale-110" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Large Decorative Treatment Image */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-sm group">
          <Image
            src="https://ext.same-assets.com/1270808772/2174973878.jpeg"
            alt="TCM Treatment"
            width={800}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
