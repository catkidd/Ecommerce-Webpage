import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import PuzzlePeiceIcon from "@heroicons/react/24/solid/PuzzlePieceIcon";
import RectangleGroupIcon from "@heroicons/react/24/solid/RectangleGroupIcon";
import AtSymbolIcon from "@heroicons/react/24/solid/AtSymbolIcon";
import QuestionMarkCircleIcon from "@heroicons/react/24/solid/QuestionMarkCircleIcon";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Best Deals",
    path: "/bestDeals",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Men",
    path: "/men",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Women",
    path: "/women",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },

  {
    title: "ABOUT US",
    path: "/about",
    icon: (
      <SvgIcon fontSize="small">
        <QuestionMarkCircleIcon />
      </SvgIcon>
    ),
  },
  {
    title: "CONTACT",
    path: "/contact",
    icon: (
      <SvgIcon fontSize="small">
        <AtSymbolIcon />
      </SvgIcon>
    ),
  },
];
