import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  likes: number;
}

const PortfolioItem = ({ title, category, imageUrl, likes }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-72 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm mb-2">{category}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "NFT Dashboard Application",
      category: "Web Application",
      imageUrl: "/portfolio/nft-dashboard.jpg",
      likes: 1185
    },
    {
      title: "Mobile App Design",
      category: "Mobile Application",
      imageUrl: "/portfolio/mobile-app.jpg",
      likes: 570
    },
    {
      title: "Workout Website Design",
      category: "Web Design",
      imageUrl: "/portfolio/workout-website.jpg",
      likes: 747
    },
    {
      title: "Food Delivery App",
      category: "Mobile Application",
      imageUrl: "/portfolio/food-delivery.jpg",
      likes: 602
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      imageUrl: "/portfolio/portfolio-website.jpg",
      likes: 825
    },
    {
      title: "E-commerce Platform",
      category: "Web Application",
      imageUrl: "/portfolio/ecommerce.jpg",
      likes: 932
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my latest projects. Each project is unique and crafted with attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 