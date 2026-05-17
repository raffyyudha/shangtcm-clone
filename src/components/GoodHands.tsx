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
    <section className="py-20 px-6 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#b5b099] text-center font-normal mb-16">
          You Are In<br />Good Hands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl text-[#b5b099] font-semibold mb-4">{feature.title}</h3>
              <p className="text-[#3c312d] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
