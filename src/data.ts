import { Icon } from "./components/icon";

export type FolderData = {
  id: string;
  name: string;
  isPrivate?: boolean;
  updated: string;
  contents: string[];
  icon?: string;
};

export const foldersData: FolderData[] = [
  {
    id: "0hqcsy",
    name: "Projects",
    updated: "2 days ago",
    isPrivate: true,
    contents: ["dob85o", "2944f1", "yeljnw"],
    icon: "SquaresFour"
  },
  {
    id: "42d9go",
    name: "Design System",
    updated: "5 hours ago",
    isPrivate: false,
    contents: ["rokbhk", "l96ahp"],
    icon: "Swatches",
  },
  {
    id: "64stw3",
    name: "Team Docs",
    updated: "3 days ago",
    isPrivate: false,
    contents: ["4tfcn2", "8seegl", "g5t1cg"],
    icon: "FileText",
  },
  {
    id: "lxij9p",
    name: "Marketing",
    updated: "1 week ago",
    isPrivate: true,
    contents: ["gly57r"],
    icon: "Megaphone",
  },
  {
    id: "yjqorq",
    name: "Finance",
    updated: "1 day ago",
    isPrivate: true,
    contents: [],
    icon: "Coins",
  },
];
