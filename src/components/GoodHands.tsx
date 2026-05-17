export default function GoodHands() {
  const features = [
    {
      title: "Certifications",
      description: "Our team of TCM physicians are registered under TCMPB (Traditional Chinese Medicine Practitioners Board), a statutory board under the Ministry of Health.",
    },
    {
      title: "Pressure-Free Approach",
      description: "We prioritize your well-being and peace of mind. We want you to know that we do not engage in hard selling packages. Your trust is our priority.",
    },
    {
      title: "We Are Experienced",
      description: "TCM is sometimes misunderstood as a slow, supporting remedy. We have the experience and expertise to prescribe medicine and therapies that can accelerate your recovery.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-[#f5f4ee]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-[#9a9e86] text-center font-normal mb-12 md:mb-16 leading-tight">
          You Are In<br />Good Hands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg md:text-xl text-[#9a9e86] font-semibold mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-[#2c3e35] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
