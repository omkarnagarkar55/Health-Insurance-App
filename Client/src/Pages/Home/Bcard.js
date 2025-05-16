import React from "react";

const cardData = [
  {
    title: "A 350° System",
    subtitle: "Caresure",
    description:
      "Health is not a destination but a journey. Enrich your health and well-being with our wellness services.",
    icon: "https://d28c6jni2fmamz.cloudfront.net/Test_6b932c0bf6.svg",
    button: null,
  },
  {
    title: "Talk to Caresure",
    description: "Free, expert telemedicine facility",
    icon: "https://d28c6jni2fmamz.cloudfront.net/Test_6b932c0bf6.svg",
    button: "Learn More",
  },
  {
    title: "COVID-19 Helpline",
    description: "COVID advisory & support",
    icon: "https://d28c6jni2fmamz.cloudfront.net/Covid_19_3ce2ac46b4.svg",
    button: "Learn More",
  },
  {
    title: "Health Library",
    description: "Blogs from our experts",
    icon: "https://d28c6jni2fmamz.cloudfront.net/Health_Library_bbacb539c4.svg",
    button: "Learn More",
  },
  {
    title: "Outpatient Portal",
    description: "Book your consultation online",
    icon: "https://d28c6jni2fmamz.cloudfront.net/OPD_services_7973dc9c63.svg",
    button: "Learn More",
  },
  {
    title: "Wellness Program",
    description: "Start your healthy lifestyle",
    icon: "https://d28c6jni2fmamz.cloudfront.net/Wellness_7dff2b4c84.svg",
    button: "Learn More",
  },
];

const Bcard = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-2 drop-shadow">
            Caresure Wellness & Services
          </h2>
          <p className="text-lg text-gray-600">
            Explore our range of health and wellness services designed for you and your family.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {/* First card is styled as a highlight */}
          <div className="bg-blue-600 rounded-2xl shadow-xl flex flex-col justify-center items-center p-8 text-white md:col-span-1">
            <div className="mb-4">
              <span className="text-lg font-semibold tracking-widest uppercase">{cardData[0].subtitle}</span>
            </div>
            <h3 className="text-3xl font-bold mb-3">{cardData[0].title}</h3>
            <p className="mb-3 font-medium">{cardData[0].description}</p>
            <img
              className="w-24 h-24 object-contain mt-4"
              src={cardData[0].icon}
              alt="Caresure"
            />
          </div>
          {/* Other cards */}
          {cardData.slice(1).map((card, idx) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                className="w-full h-40 object-contain object-center rounded-t-2xl bg-blue-50"
                src={card.icon}
                alt={card.title}
              />
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-blue-700 mb-2">{card.title}</h4>
                <p className="text-gray-700 font-medium mb-4 flex-1">{card.description}</p>
                {card.button && (
                  <button className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
                    {card.button}
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bcard;
