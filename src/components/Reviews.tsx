"use client";

import Image from "next/image";

const locations = [
  {
    name: "Shang TCM (Boon Lay) Pte Ltd",
    rating: 4.9,
    reviews: 437,
    image: "https://ext.same-assets.com/1270808772/3145714934.jpeg",
    testimonials: [
      {
        name: "Melanie Chang",
        time: "6 months ago",
        text: "Tcm physician Wang Dong was very detailed and patient in explaining my issues. Price was affordable and is conveniently located at boon lag",
        avatar: "M",
      },
      {
        name: "Ms Sim",
        time: "7 months ago",
        text: "Doctor Lin Qing treated me very patiently. Finally got good result. we felt happy and great fully and appreciated doctor Lin Qing. Thank you so much for",
        avatar: null,
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
        text: "The clinic was clean and tidy, receptionist was kind and friendly, and the TCM practitioner was very professional and patient. Will come",
        avatar: "Y",
      },
      {
        name: "Raelene Chan",
        time: "6 months ago",
        text: "Doctor is fast in diagnosing my issue n giving suggestions on doing acupuncture & cupping as part of treatment. Had a nice nap during the",
        avatar: null,
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
      },
      {
        name: "JIE WANG",
        time: "5 months ago",
        text: "Very good experience of the 1st visiting here. Easy to find this place just at Boon lay. Took medicine will see the results. They all have good attitude.",
        avatar: null,
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
  return (
    <section className="py-16 px-6 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto">
        {locations.map((location, locIndex) => (
          <div key={locIndex} className="mb-12 flex flex-col md:flex-row gap-8 items-start">
            {/* Location Info */}
            <div className="w-full md:w-1/4">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-sm object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[#3c312d]">{location.name}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-500 font-semibold">{location.rating}</span>
                <StarRating rating={5} />
              </div>
              <p className="text-xs text-gray-500 mb-1">Based on {location.reviews} reviews</p>
              <p className="text-xs text-gray-500 mb-2">
                powered by <span className="text-blue-600">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </p>
              <button className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1">
                review us on
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-[10px] font-bold">G</span>
                </span>
              </button>
            </div>

            {/* Reviews */}
            <div className="w-full md:w-3/4 flex gap-4 overflow-x-auto">
              {location.testimonials.map((testimonial, testIndex) => (
                <div
                  key={testIndex}
                  className="bg-white p-4 rounded shadow-sm min-w-[280px] border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#b5b099] flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar || testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.time}</p>
                    </div>
                    <svg className="w-5 h-5 text-blue-500 ml-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <StarRating rating={5} />
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Treatment Image */}
        <div className="mt-12">
          <Image
            src="https://ext.same-assets.com/1270808772/2174973878.jpeg"
            alt="TCM Treatment"
            width={800}
            height={500}
            className="w-full max-w-2xl mx-auto rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
