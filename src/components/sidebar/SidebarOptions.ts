import RamenDiningIcon from "@mui/icons-material/RamenDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ISidebarItem } from "./SidebarItem";

const sidebarOptions: ISidebarItem[] = [
  {
    text: "Listado de Monstruos",
    Icon: RamenDiningIcon,
    navgigateTo: "/monsters",
  },
  {
    text: "Nuevo Monstruo",
    Icon: MenuBookIcon,
    navgigateTo: "/new-monster",
  },
];
export default sidebarOptions;
