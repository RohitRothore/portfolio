import HireMeButton from "@/components/HireMeButton";
import Image from "next/image";

interface PortfolioItemProps {
  title: string;
  imageUrl: string;
  link: string;
}

const PortfolioItem = ({ title, imageUrl, link }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden p-4 shadow-inner border rounded-lg">
      <div className="relative h-72 w-full rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-6">{title}</h3>
          <HireMeButton target="_blank" link={link} buttonName="Learn More" />
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "University Living",
      imageUrl:
        "https://cdn.uninist.com/files/1744444096199screenshot-from-20250412-131722.webp",
      link: "https://www.universityliving.com/",
    },
    {
      title: "Uninist",
      imageUrl:
        "https://cdn.uninist.com/files/1744446251944screenshot-from-20250412-135314.webp",
      link: "https://uninist.com/",
    },
    {
      title: "Property Trade Fair",
      imageUrl:
        "https://cdn.uninist.com/files/1744446664481screenshot-from-20250412-140009.webp",
      link: "https://propertytradefair.com/",
    },
    {
      title: "Study Notion",
      imageUrl:
        "https://cdn.uninist.com/files/1744447118492screenshot-from-20250412-140816.webp",
      link: "https://mystudynotion.netlify.app/",
    },
    {
      title: "Ecomzy Shopping",
      imageUrl:
        "https://cdn.uninist.com/files/1744447688739screenshot-from-20250412-141729.webp",
      link: "https://ecomzy-beige.vercel.app/",
    },
    {
      title: "Password Generator",
      imageUrl:
        "https://cdn.uninist.com/files/1744447986180screenshot-from-20250412-142229.webp",
      link: "https://password-generator-nine-beige.vercel.app/",
    },
    {
      title: "Weather App",
      imageUrl:
        "https://cdn.uninist.com/files/1744448186232screenshot-from-20250412-142527.webp",
      link: "http://weather-app-ten-mu-63.vercel.app/",
    },
    {
      title: "Razorpay Clone",
      imageUrl:
        "https://cdn.uninist.com/files/1744448605327screenshot-from-20250412-143256.webp",
      link: "https://razorpay-clone-peach.vercel.app/",
    },
    {
      title: "Random Gif Generator",
      imageUrl:
        "https://cdn.uninist.com/files/1744448888440screenshot-from-20250412-143743.webp",
      link: "https://main--bucolic-sopapillas-5236f4.netlify.app/",
    },
    {
      title: "Dev Detective",
      imageUrl:
        "https://cdn.uninist.com/files/1744449109473screenshot-from-20250412-144121.webp",
      link: "https://main--jade-caramel-f8683b.netlify.app/",
    },
    {
      title: "Top Course",
      imageUrl:
        "https://cdn.uninist.com/files/1744448748348screenshot-from-20250412-143523.webp",
      link: "https://top-course-jade.vercel.app/",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my latest projects. Each project is unique and
            crafted with attention to detail.
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
