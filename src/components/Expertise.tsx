import Link from "next/link";

const expertiseAreas = [
  {
    icon: "https://ext.same-assets.com/1270808772/1674162220.png",
    title: "Pain Management",
    description: "TCM therapy supports a speedy and complete recovery from muscular, nervous, tissue, and skeletal injuries.",
  },
  {
    icon: "https://ext.same-assets.com/1270808772/2417614138.webp",
    title: "General Health",
    description: "TCM offers effective treatment for chronic conditions like cough and asthma, while also fortifying your body's defenses against viral infections.",
  },
  {
    icon: "https://ext.same-assets.com/1270808772/745997081.webp",
    title: "Fertility And Female Health",
    description: "TCM offers a holistic approach to addressing fertility concerns, menstrual and other female health issues.",
  },
  {
    icon: "https://ext.same-assets.com/1270808772/4133121886.webp",
    title: "Facial And Skin Conditions",
    description: "TCM can improve skin issues like eczema and acne. It can also help in improving blood circulation, resulting in enhanced radiance and beauty.",
  },
  {
    icon: "https://ext.same-assets.com/1270808772/2414631088.png",
    title: "Weight Management",
    description: "TCM focuses on nurturing a healthy metabolism and managing weight naturally and healthily.",
  },
  {
    icon: "https://ext.same-assets.com/1270808772/3543571692.webp",
    title: "Pediatrics",
    description: "Stimulate and support your child's emotional and physical development with pediatric treatments.",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 px-6 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#b5b099] text-center font-normal mb-16">
          Our Areas of Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6">
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl text-[#b5b099] font-semibold mb-4">{area.title}</h3>
              <p className="text-[#3c312d] text-sm leading-relaxed mb-4">{area.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-[#3c312d] text-xs uppercase tracking-wider hover:text-[#b5b099] transition-colors"
              >
                Read more
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
