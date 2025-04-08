interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="p-6 group hover:from-red-600 hover:to-indigo-600 rounded-lg bg-gradient-to-tr from-gray-100 to-white shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="w-12 h-12 text-red-600 mb-4 group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 group-hover:text-white">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "App Development",
      description:
        "We handle everything from app development process until it is time to make your project live.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description:
        "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive and engaging user interfaces that provide exceptional user experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-center uppercase text-red-600 text-lg mb-2 font-medium">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            I specialize in creating powerful web applications with intuitive
            designs, optimizing them for search engines, and delivering
            exceptional user experiences that help your business stand out in
            the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
