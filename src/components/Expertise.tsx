import Link from "next/link";

const expertiseAreas = [
  {
    icon: "/pain_management.png",
    title: "Pain Management",
    description: "TCM therapy supports a speedy and complete recovery from muscular, nervous, tissue, and skeletal injuries.",
    delayClass: "delay-100",
  },
  {
    icon: "/general_health.png",
    title: "General Health",
    description: "TCM offers effective treatment for chronic conditions like cough and asthma, while also fortifying your body's defenses against viral infections.",
    delayClass: "delay-200",
  },
  {
    icon: "/female_health.png",
    title: "Fertility And Female Health",
    description: "TCM offers a holistic approach to addressing fertility concerns, menstrual and other female health issues.",
    delayClass: "delay-300",
  },
  {
    icon: "/skin_conditions.png",
    title: "Facial And Skin Conditions",
    description: "TCM can improve skin issues like eczema and acne. It can also help in improving blood circulation, resulting in enhanced radiance and beauty.",
    delayClass: "delay-100",
  },
  {
    icon: "/weight_management.png",
    title: "Weight Management",
    description: "TCM focuses on nurturing a healthy metabolism and managing weight naturally and healthily.",
    delayClass: "delay-200",
  },
  {
    icon: "/pediatrics.png",
    title: "Pediatrics",
    description: "Stimulate and support your child's emotional and physical development with pediatric treatments.",
    delayClass: "delay-300",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-[#7cb3e0] text-center font-normal mb-12 md:mb-16 animate-fade-in-up">
          Our Areas of Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`text-center px-6 py-8 md:py-10 hover-lift group ${
                /* Add right border on desktop for items not in last column */
                (index % 3 !== 2) ? "md:border-r md:border-[#e5e2db]" : ""
              } ${
                /* Add bottom border for first row on desktop */
                index < 3 ? "md:border-b md:border-[#e5e2db]" : ""
              } ${
                /* Add bottom border for all except last item on mobile */
                index < expertiseAreas.length - 1 ? "border-b border-[#e5e2db] md:border-b-0" : ""
              } ${
                /* Re-add bottom border for first row on desktop */
                index < 3 ? "md:border-b md:border-[#e5e2db]" : ""
              } animate-fade-in-up ${area.delayClass}`}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "hue-rotate(175deg) saturate(1.5) brightness(1.1)" }}
                />
              </div>
              <h3 className="text-lg md:text-xl text-[#7cb3e0] font-semibold mb-3 md:mb-4 group-hover:text-[#63a0d4] transition-colors">{area.title}</h3>
              <p className="text-[#1e293b] text-sm leading-relaxed mb-4">{area.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-[#1e293b] text-xs uppercase tracking-widest hover:text-[#7cb3e0] transition-colors font-semibold group"
              >
                <span>Read more</span>
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
