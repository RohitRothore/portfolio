import {
  Briefcase,
  FileText,
  Folder,
  Home,
  Phone,
  Star,
} from "feather-icons-react";

export const HEADER = {
  LOGO: "https://cdn.uninist.com/files/1740468620342lindinprofileimage3-1.jpg?width=56&height=56",
  MENU: [
    {
      name: "Home",
      id: "/#hero-section",
      icon: Home,
    },
    {
      name: "Experience",
      id: "/#experience",
      icon: Briefcase,
    },
    {
      name: "Features",
      id: "/#features",
      icon: Star,
    },
    {
      name: "Resume",
      id: "/#resume",
      icon: FileText,
    },
    {
      name: "Projects",
      id: "/#projects",
      icon: Folder,
    },
    {
      name: "Contact me",
      id: "/#contact",
      icon: Phone,
    },
  ],
  BUTTON: {
    name: "Hire me",
    id: "/#contact",
  },
};
