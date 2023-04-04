import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Best Deals",
    path: "/bestdeals",
    icon: <LocalMallIcon />,
  },
  {
    title: "Men",
    path: "/men",
    icon: <MaleIcon />,
  },
  {
    title: "Women",
    path: "/women",
    icon: <FemaleIcon />,
  },

  {
    title: "About Us",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <AlternateEmailIcon />,
  },
];
