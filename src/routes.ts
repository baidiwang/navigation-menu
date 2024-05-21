import { GiBrickWall } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { BsBricks } from "react-icons/bs";
import { TbBrandDatabricks } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { SiMoneygram } from "react-icons/si";
import { TbZoomMoneyFilled } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaVideo } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaBilibili } from "react-icons/fa6";

type CustomRoute = {
  title: string;
  href: string;
  Icon?: IconType;
  subRoutes?: CustomRoute[];
  open?: boolean;
};

export const routes: CustomRoute[] = [
  {
    title: "BUIDLs",
    href: "#",
    Icon: GiBrickWall,
    subRoutes: [
      {
        title: "All BUIDLs",
        href: "#",
        Icon: BsBricks,
      },
      {
        title: "BUIDL Collections",
        href: "#",
        Icon: TbBrandDatabricks,
      },
    ],
  },
  {
    title: "Grants",
    href: "#",
    Icon: GrMoney,
    subRoutes: [
      {
        title: "Community Funding",
        href: "#",
        Icon: GiPayMoney,
      },
      {
        title: "Mini Grant",
        href: "#",
        Icon: FaMoneyBillAlt,
      },
      {
        title: "Grant DAOs",
        href: "#",
        Icon: TbZoomMoneyFilled,
      },
      {
        title: "ATOM Economic Zone Quadratic Grant",
        href: "#",
        Icon: SiMoneygram,
      },
    ],
  },
  {
    title: "Bounties",
    href: "#",
    Icon: FaAward,
    subRoutes: [
      {
        title: "DAO Bounties",
        href: "#",
      },
      {
        title: "Mini Bounty",
        href: "#",
      },
      {
        title: "Bug Bounty",
        href: "#",
      },
    ],
  },
  {
    title: "Hackathons",
    href: "#",
    Icon: IoGameController,
  },
  {
    title: "Ideas",
    href: "#",
    Icon: TbBulbFilled,
  },
  {
    title: "Lives",
    href: "#",
    Icon: MdSlowMotionVideo,
    subRoutes: [
      {
        title: "Binance Live",
        href: "#",
        Icon: FaVideo,
      },
      {
        title: "YouTube",
        href: "#",
        Icon: MdOndemandVideo,
      },
      {
        title: "Bilibili",
        href: "#",
        Icon: FaBilibili,
      },
    ],
  },
];
